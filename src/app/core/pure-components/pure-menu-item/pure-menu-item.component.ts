import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IMenuItem } from '../../pure-interfaces/menu';
import { PureMenuService } from '../pure-menu/pure-menu.service';
import { PureStringUtils } from '../../pure-utils/pure-string-utils';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html',
  styleUrls: ['./pure-menu-item.component.scss']
})
export class PureMenuItem implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(PureMenuItem) childMenuItems: QueryList<PureMenuItem>;

  @Input() menuItemData: IMenuItem;
  @Input() level = 0;
  @Input() active = false;
  @Input() opened = false;
  @Input() parent: PureMenuItem;

  private routeSubscription: Subscription;
  private _parent: PureMenuItem = this;

  constructor(
    private _menuService: PureMenuService,
    private _route: Router,
    private _changeDetectionRef: ChangeDetectorRef,
    public _menuContainer: PureMenuContainerService) {
  }

  ngOnInit() {
    // Menu with so much level with shrink the text. It doens't provide a good UI experience.
    // So i limit it at 5 levels. From 0 (Default level) to 4
    // In this case i recommend create multi groups for menu items
    if (this.level > 4) {
      this.level = 4;
    }
    
    // Set menu item is active when first load
    this.activate();

   
  }

  ngAfterViewInit() {
    // Subscribe to set menu item is active when change route
    this.routeSubscription = this._route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // Deactivate current activating menu item
        this.activate();
      }
    });

     // Expanding menu on load when there is activating menu item
     if (this._menuService.activatingMenuItem && this._menuService.activatingMenuItem === this) {
      this.expandDropdownOnLoad();
    }

    // To detect when you change value of a parent components when inside child components
    this._changeDetectionRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
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
    if (!this.opened) return 0;

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
    if(!this.menuItemData || this.hasExternalLink) {
      return false;
    }
    return !PureStringUtils.isEmpty(this.menuItemData.url);
  }

  get hasExternalLink(): boolean {
    if(!this.menuItemData) {
      return false;
    }

    return !PureStringUtils.isEmpty(this.menuItemData.url) && 
      (PureStringUtils.startsWith(this.menuItemData.url, 'http://') ||
       PureStringUtils.startsWith(this.menuItemData.url, 'https://'));
  }

  /**
   * FUNCTIONS
   */

  activate() {
    if (this.menuItemData && this.menuItemData.url && !this.hasChildren){
      if(PureStringUtils.cleanRouteLink(this._route.url) === PureStringUtils.cleanRouteLink(this.menuItemData.url)) {
        this._menuService.setActivatingMenuItem(this);
      }
    }
  }

  deactivate() {
    this.active = false;
  }

  onMenuItemClicked() {
    if (this.hasChildren) {
      this.toggleDropdown();
    } else {
      this.navigate();
    }
  }

  toggleDropdown() {
    if (this.opened) {
      this.collapseDropdown();
    } else {
      // Collapse expanding menu item to open a new one (Just for root menu item)
      if (this.level === 0) {
        this._menuService.collapseExpandingMenuItem();
        this._menuService.setExpandingMenuItem(this); // Set this root menu item as expanding menu item
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
      this._route.navigate([this.menuItemData.url]).catch(e => {
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
      this._menuService.onActivatingMenuItem$.next(new Date);
    }
  }

  expandDropdownOnLoad() {
    let parent: PureMenuItem = this;
    let rootParent: PureMenuItem = this;

    while (parent !== undefined && parent !== null) {
      if (parent && parent.level !== 0){
        parent.toggleDropdown();
      }

      parent = parent.parent;

      if (parent) {
        rootParent = parent;
      }
    }

    if (rootParent) {
      this._menuService.setExpandingMenuItem(rootParent);
    }
  }
}
