import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureMenuService } from './pure-menu.service';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { MENU_CONFIG } from '../../../configs/menu';
import { MenuGroup } from '../../../core/pure-models/menu';

@Component({
  selector: 'pure-menu',
  templateUrl: './pure-menu.component.html'
})
export class PureMenu implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('PURE_MENU', { static: false }) pureMenuScrollbar?: PerfectScrollbarDirective;

  public menuGroups: MenuGroup[] = MENU_CONFIG;
  private subscriptions: Map<String, Subscription> = new Map();

  constructor(
    private _menuService: PureMenuService,
    public _menuContainer: PureMenuContainerService,
    public _mainContainer: PureMainContainerService,
    public _settings: PureSettingsService) {
      this.detectMenuItemActive();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngAfterViewInit() {
    this.focusActiveMenu();
  }

  detectMenuItemActive() {
    // The menu have animation on height when menu expanding. Have to wait for animation done.
    // If no, there'll be a gap at bottom in some case.

    if (this.subscriptions.get('detectMenuItemActive') !== undefined) {
      return;
    }

    this.subscriptions.set('detectMenuItemActive', this._menuService.onActivatingMenuItem$
      .pipe(debounceTime(100), distinctUntilChanged()).subscribe(() => {
        setTimeout(() => {
          this.pureMenuScrollbar.update();
        }, 300);
    }));
  }

  focusActiveMenu() {
    /**
     * If there is activated memu item, scroll to it and make it is center of the menu
     */
    const activatingMenuItemRef = document.getElementsByClassName('pure-menu-content active');

    if (activatingMenuItemRef && activatingMenuItemRef[0]) {
      activatingMenuItemRef[0].scrollIntoView(true);

      // Menu has scroll all the way to bottom
      const pureMenu = this.pureMenuScrollbar.elementRef.nativeElement;

      // 64 is the height of toolbar, 24 is half of the item height
      const centerScreenHeight = (window.innerHeight - 64) / 2 - 24;

      pureMenu.scrollTop -= centerScreenHeight;
    }
  }
}
