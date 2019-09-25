import { Component, OnDestroy, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureMenuService } from './pure-menu.service';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription, BehaviorSubject, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { MENU_CONFIG } from '../../../configs/menu';
import { MenuGroup, MenuItem } from '../../../core/pure-models/menu';

@Component({
  selector: 'pure-menu',
  templateUrl: './pure-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMenu implements OnDestroy, AfterViewInit {
  @ViewChild('PURE_MENU', { static: false }) pureMenuScrollbar?: PerfectScrollbarDirective;

  public menuGroups: MenuGroup[] = MENU_CONFIG;
  public showDetail$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private subscriptions: Map<String, Subscription> = new Map();

  constructor(
    private _menuService: PureMenuService,
    private _deviceDetector: DeviceDetectorService,
    public _menuContainer: PureMenuContainerService,
    public _mainContainer: PureMainContainerService,
    public _settings: PureSettingsService) {
      this.detectShowItemDetail();
      this.detectMenuItemActive();
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

  detectShowItemDetail() {
    // This is a technique to only show menu item and it children when menu is open in mobile devices
    // This will reducing the side of DOM, so improve a lot of performance for this application in mobile devices
    if (this._deviceDetector.isDesktop()) {
      return;
    }

    if (this.subscriptions.get('detectShowItemDetail') !== undefined) {
      return;
    }

    const combineBehaviorSubjects = combineLatest(
      this._mainContainer.isFullWidth$,
      this._menuContainer.isOpened$
    ).pipe(distinctUntilChanged());

    const subscription = combineBehaviorSubjects.subscribe(([
      isFullWidth,
      isMenuOpened
    ]) => {
      if (!isFullWidth && !isMenuOpened) {
        setTimeout(() => {
          this.showDetail$.next(false);
        }, 150);
      } else {
        this.showDetail$.next(true);
      }
    });

    this.subscriptions.set('detectShowItemDetail', subscription);
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

  trackGroupByFn(index: number, group: MenuGroup) {
    return `${index}_${group.groupName}`;
  }

  trackItemByFn(index: number, item: MenuItem) {
    return `${index}_${item.name}`;
  }
}
