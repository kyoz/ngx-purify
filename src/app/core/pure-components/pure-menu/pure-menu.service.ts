import { Injectable } from '@angular/core';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';
import { Subject } from 'rxjs';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';

@Injectable()
export class PureMenuService {
  expandingMenuItem: PureMenuItem;
  activatingMenuItem: PureMenuItem;

  onActivatingMenuItem$ = new Subject<Date>();

  constructor(private _menuContainer: PureMenuContainerService, private _mainContainer: PureMainContainerService) {}

  setExpandingMenuItem(menuItem: PureMenuItem) {
    this.expandingMenuItem = menuItem;
    this.expandingMenuItem.opened.next(true);

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
    this.activatingMenuItem.active.next(true);

    // Close Menu Container if menu is not pinned and page is not full screen
    if (!this._mainContainer.isFullWidth$.value) {
      this._menuContainer.close();
    }
  }
}