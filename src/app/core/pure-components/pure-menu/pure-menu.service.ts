import { Injectable } from '@angular/core';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';

@Injectable()
export class PureMenuService {
  expandingMenuItem: PureMenuItem;
  activatingMenuItem: PureMenuItem;

  setExpandingMenuItem(menuItem: PureMenuItem) {
    this.expandingMenuItem = menuItem;
  }

  setActivatingMenuItem(menuItem: PureMenuItem) {
    this.activatingMenuItem = menuItem;
  }

  collapseExpandingMenuItem() {
    if (this.expandingMenuItem && this.expandingMenuItem.opened) {
      this.expandingMenuItem.collapseDropdown();
    }
  }

  deactivateMenuItem() {
    if (this.activatingMenuItem && this.activatingMenuItem.active) {
      this.activatingMenuItem.deactivate();
    }
  }
}