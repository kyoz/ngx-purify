import { Injectable } from '@angular/core';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';
import { Subject } from 'rxjs';

@Injectable()
export class PureMenuService {
  expandingMenuItem: PureMenuItem;
  activatingMenuItem: PureMenuItem;

  onActivatingMenuItem$ = new Subject<Date>();

  setExpandingMenuItem(menuItem: PureMenuItem) {
    this.expandingMenuItem = menuItem;
    this.expandingMenuItem.opened = true;

    // Dispatch event to know when the menu is expand
    this.onActivatingMenuItem$.next(new Date());
  }

  collapseExpandingMenuItem() {
    if (this.expandingMenuItem && this.expandingMenuItem.opened) {
      this.expandingMenuItem.collapseDropdown();
    }
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
}