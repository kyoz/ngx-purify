import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../../pure-interfaces/menu';
import { PureMenuService } from '../pure-menu/pure-menu.service';
import { PureStringUtils } from '../../pure-utils/pure-string-utils';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html',
  styleUrls: ['./pure-menu-item.component.scss']
})
export class PureMenuItem implements OnInit {
  @ViewChildren(PureMenuItem) childMenuItems: QueryList<PureMenuItem>;

  @Input() menuItemData: IMenuItem;
  @Input() level = 0;
  @Input() active = false;
  @Input() opened = false;
  @Input() expandingMenuItem: PureMenuItem; // To collapse expading menu when expand other menu

  constructor(
    private _menuService: PureMenuService,
    private _route: Router) {
  }

  ngOnInit() {
    // Menu with so much level with shrink the text. It doens't provide a good UI experience.
    // So i limit it at 5 levels. From 0 (Default level) to 4
    // In this case i recommend create multi groups for menu items
    if (this.level > 4) {
      this.level = 4;
    }

    // Set menu item is active when navigate route of this menu item or refresh page
    if (this.menuItemData && this.menuItemData.route && !this.hasChildren){
      if(PureStringUtils.cleanRouteLink(this._route.url) === PureStringUtils.cleanRouteLink(this.menuItemData.route)) {
        this._menuService.setActivatingMenuItem(this);
      }
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
    return (this.menuItemData.children.length * 48) + addedHeight;
  }

  get hasLink(): boolean {
    if(!this.menuItemData || this.hasExternalLink) {
      return false;
    }
    return !PureStringUtils.isEmpty(this.menuItemData.route);
  }

  get hasExternalLink(): boolean {
    if(!this.menuItemData) {
      return false;
    }

    return !PureStringUtils.isEmpty(this.menuItemData.route) && 
      (PureStringUtils.startsWith(this.menuItemData.route, 'http://') ||
       PureStringUtils.startsWith(this.menuItemData.route, 'https://'));
  }

  /**
   * FUNCTIONS
   */

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
    this._menuService.deactivateMenuItem();

    // Navigate
    if (this.hasExternalLink) {
    window.location.href = this.menuItemData.route;
    } else {
      const activatingMenuItem = this._menuService.activatingMenuItem;

      this._menuService.setActivatingMenuItem(this);
      this._route.navigate([this.menuItemData.route]).catch(e => {
        this._menuService.setActivatingMenuItem(activatingMenuItem);
        this.active = false;
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
    }
  }
}
