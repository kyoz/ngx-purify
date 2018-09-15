import { Injectable } from '@angular/core';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';

@Injectable()
export class PureMenuService {
  expandingMenuItem: PureMenuItem;
  activatingMenuItem: PureMenuItem;

  setExpandingMenuItem(menuItem: PureMenuItem) {
    this.expandingMenuItem = menuItem;
    this.expandingMenuItem.opened = true;
  }

  setActivatingMenuItem(menuItem: PureMenuItem) {
    // Deactivate activating menu
    if (this.activatingMenuItem && this.activatingMenuItem.active) {
      this.activatingMenuItem.deactivate();
    }

    // Activate for new menu item
    this.activatingMenuItem = menuItem;
    this.activatingMenuItem.active = true;
  }

  collapseExpandingMenuItem() {
    if (this.expandingMenuItem && this.expandingMenuItem.opened) {
      this.expandingMenuItem.collapseDropdown();
    }
  }
}