import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from '../../pure-models/menu';
import { PureMenuService } from '../pure-menu/pure-menu.service';
import { PureGlobalService } from '../../pure-services/pure-global.service';
import { PureStringUtils } from '../../pure-utils/pure-string-utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html'
})
export class PureMenuItem implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(PureMenuItem) childMenuItems: QueryList<PureMenuItem>;

  @Input() menuItemData: MenuItem;
  @Input() level: number = 0;
  @Input() active: boolean;
  @Input() opened: boolean;
  @Input() parent: PureMenuItem;
  @Input() isMenuOpened: boolean;
  @Input() textDirection: string;

  private _parent: PureMenuItem = this;
  private subscriptions: Map<String, Subscription> = new Map();

  constructor(
    private _menu: PureMenuService,
    private _global: PureGlobalService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef) {
      this.detectWhenRouteChanged();
  }

  ngOnInit() {
    // Set menu item is active when first load
    this.fixBadgeColor();
    this.fixMenuLevel();
    this.setActivatingMenu();
  }

  ngAfterViewInit() {

    // Expanding menu on load when there is activating menu item
    if (this._menu.activatingMenuItem && this._menu.activatingMenuItem === this) {
      this.expandDropdownOnLoad();
    }

    // To detect when you change value of a parent components when inside child components
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  /**
   * GET FUNCTIONS
   */

  get hasChildren(): boolean {
    if (!this.menuItemData || !this.menuItemData.children) {
      return false;
    }
    return this.menuItemData.children.length > 0;
  }

  get height(): number {
    if (!this.opened) {
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
    return this.menuItemData && this.menuItemData.children ? (this.menuItemData.children.length * 48) + addedHeight : 0;
  }

  get hasLink(): boolean {
    if (!this.menuItemData || this.hasExternalLink) {
      return false;
    }
    return !PureStringUtils.isEmpty(this.menuItemData.url);
  }

  get hasExternalLink(): boolean {
    if (!this.menuItemData) {
      return false;
    }

    return !PureStringUtils.isEmpty(this.menuItemData.url) &&
      (PureStringUtils.startsWith(this.menuItemData.url, 'http://') ||
       PureStringUtils.startsWith(this.menuItemData.url, 'https://'));
  }

  /**
   * FUNCTIONS
   */

  detectWhenRouteChanged() {

    if (this.subscriptions.get('detectWhenRouteChanged') !== undefined) {
      return;
    }

    // Subscribe to set menu item is active when change route
    this.subscriptions.set('detectWhenRouteChanged', this._global.onRouterEventEmit$.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // Deactivate current activating menu item
        this.setActivatingMenu();
      }
    }));
  }

  setActivatingMenu() {
    if (this.menuItemData && this.menuItemData.url && !this.hasChildren) {
      if (PureStringUtils.cleanRouteLink(this._router.url) === PureStringUtils.cleanRouteLink(this.menuItemData.url)) {
        this._menu.setActivatingMenuItem(this);
      }
    }
  }

  deactivate() {
    this.active = false;
  }

  onMenuItemClicked() {
    if (this.hasChildren) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    if (this.opened) {
      this.collapseDropdown();
    } else {
      // Collapse expanding menu item to open a new one (Just for root menu item)
      if (this.level === 0) {
        this._menu.collapseExpandingMenuItem();
        this._menu.setExpandingMenuItem(this); // Set this root menu item as expanding menu item
      }

      this.opened = true;
    }
  }

  navigate() {

    if (this.hasExternalLink) {
      // Navigate to an external Link
      window.location.href = this.menuItemData.url;
    } else {
      // Change route
      this._router.navigate([this.menuItemData.url], { queryParams: this.menuItemData.params }).catch(e => {
        console.error(e);
      });
    }
  }

  collapseDropdown() {
    this.opened = false;

    // Collapse all child item if possible
    if (!this.opened && this.childMenuItems) {
      this.childMenuItems.forEach(childComponent => {
        if (childComponent.opened) {
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

  fixMenuLevel() {
    // Menu with so much level with shrink the text. It doens't provide a good UI experience.
    // So i limit it at 5 levels. From 0 (Default level) to 4
    // In this case i recommend create multi groups for menu items
    if (this.level > 4) {
      this.level = 4;
    }
  }

  fixBadgeColor() {
    if (!(this.menuItemData && (this.menuItemData.badgeColor === 'primary' || this.menuItemData .badgeColor === 'accent'))) {
      this.menuItemData.badgeColor = 'warn';
    }
  }

  trackByFn(index: number, item: MenuItem) {
    return `${index}_${item.name}`;
  }
}
