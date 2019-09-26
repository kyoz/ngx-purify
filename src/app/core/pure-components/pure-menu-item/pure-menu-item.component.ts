import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit,
  OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from '../../pure-models/menu';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMenuService } from '../pure-menu/pure-menu.service';
import { PureGlobalService } from '../../pure-services/pure-global.service';
import { PureStringUtils } from '../../pure-utils/string';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMenuItem implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(PureMenuItem) childMenuItems: QueryList<PureMenuItem>;

  @Input() data: MenuItem;
  @Input() level: number = 0;
  @Input() parent: PureMenuItem;
  @Input() showDetail$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public active$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public opened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public replaceIcon = 'layers';
  public hasExternalLink = false;

  private _parent: PureMenuItem = this;
  private subscriptions: Map<String, Subscription> = new Map();

  constructor(
    public _settings: PureSettingsService,
    private _menu: PureMenuService,
    private _global: PureGlobalService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef) {
      this.detectWhenRouteChanged();
  }

  ngOnInit() {
    // Set menu item is active when first load
    this.initialize();
    this.setActivatingMenu();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngAfterViewInit() {

    // Expanding menu on load when there is activating menu item
    if (this._menu.activatingMenuItem && this._menu.activatingMenuItem === this) {
      this.expandDropdownOnLoad();
    }

    // To detect when you change value of a parent components when inside child components
    this._changeDetectorRef.detectChanges();
  }

  /**
   * GET FUNCTIONS
   */

  get hasChildren(): boolean {
    if (!this.data || !this.data.children) {
      return false;
    }
    return this.data.children.length > 0;
  }

  get height(): number {
    if (!this.opened$.value) {
      return 0;
    }

    let addedHeight = 0;
    if (this.childMenuItems) {
      this.childMenuItems.forEach(childComponent => {
        if (childComponent) {
          addedHeight += childComponent.height;
        }
      });
    }
    return this.data && this.data.children ? (this.data.children.length * 48) + addedHeight : 0;
  }

  get hasLink(): boolean {
    if (!this.data || this.hasExternalLink) {
      return false;
    }
    return !PureStringUtils.isEmpty(this.data.url);
  }

  /**
   * FUNCTIONS
   */

  detectWhenRouteChanged() {
    // Subscribe to set menu item is active when change route
    this.subscriptions.set('detectWhenRouteChanged', this._global.onRouterEventEmit$.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // Deactivate current activating menu item
        this.setActivatingMenu();
      }
    }));
  }

  setActivatingMenu() {
    if (this.data && this.data.url && !this.hasChildren) {
      if (PureStringUtils.cleanRouteLink(this._router.url) === PureStringUtils.cleanRouteLink(this.data.url)) {
        this._menu.setActivatingMenuItem(this);

        // If current menu is expanding, then collapse it
        if (this._menu.activatingMenuItem.level === 0) {
          this._menu.collapseExpandingMenuItem();
        }
      }
    }
  }

  deactivate() {
    this.active$.next(false);
  }

  onMenuItemClicked() {
    if (this.hasChildren) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    if (this.opened$.value) {
      this.collapseDropdown();
    } else {
      // Collapse expanding menu item to open a new one (Just for root menu item)
      if (this.level === 0) {
        this._menu.collapseExpandingMenuItem();
        this._menu.setExpandingMenuItem(this); // Set this root menu item as expanding menu item
      }

      this.opened$.next(true);
    }
  }

  navigate() {

    if (this.hasExternalLink) {
      // Navigate to an external Link
      window.location.href = this.data.url;
    } else {
      // Change route
      this._router.navigate([this.data.url], { queryParams: this.data.params }).catch(e => {
        console.error(e);
      });
    }
  }

  collapseDropdown() {
    this.opened$.next(false);

    // Collapse all child item if possible
    if (!this.opened$.value && this.childMenuItems) {
      this.childMenuItems.forEach(childComponent => {
        if (childComponent.opened$.value) {
          childComponent.toggleDropdown();
        }
      });

      // Dispatch event to know when the menu is collapse
      this._menu.onActivatingMenuItem$.next(new Date);
    }
  }

  expandDropdownOnLoad() {
    let parent: PureMenuItem = this;
    let rootParent: PureMenuItem = this;

    while (parent !== undefined && parent !== null) {
      if (parent && parent.level !== 0) {
        parent.toggleDropdown();
      }

      parent = parent.parent;

      if (parent) {
        rootParent = parent;
      }
    }

    if (rootParent) {
      this._menu.setExpandingMenuItem(rootParent);
    }
  }

  initialize() {
    // Menu with so much level with shrink the text. It doens't provide a good UI experience.
    // So i limit it at 5 levels. From 0 (Default level) to 4
    // In this case i recommend create multi groups for menu items
    if (this.level > 4) {
      this.level = 4;
    }

    // Check if menu link is external
    if (!this.data) {
      this.hasExternalLink = false;
    }

    this.hasExternalLink = !PureStringUtils.isEmpty(this.data.url) &&
      (PureStringUtils.startsWith(this.data.url, 'http://') ||
       PureStringUtils.startsWith(this.data.url, 'https://'));

    // Fix badge color
    if (!(this.data && (this.data.badgeColor === 'primary' || this.data .badgeColor === 'accent'))) {
      this.data.badgeColor = 'warn';
    }

    // Replace icon
    if (this.data.icon) {
      this.replaceIcon = this.data.icon;
    }
  }

  trackByFn(index: number, item: MenuItem) {
    return `${index}_${item.name}`;
  }
}
