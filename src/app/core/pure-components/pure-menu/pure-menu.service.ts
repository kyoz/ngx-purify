import { Injectable } from '@angular/core';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';

@Injectable()
export class PureMenuService {
  expandingMenuItem: PureMenuItem;

  setExpandingMenuItem(menuItem: PureMenuItem) {
    this.expandingMenuItem = menuItem;
  }

  collapseExpandingMenuItem() {
    if (this.expandingMenuItem && this.expandingMenuItem.opened) {
      this.expandingMenuItem.collapseDropdown();
    }
  }
}