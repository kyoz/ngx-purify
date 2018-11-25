import { Component, OnInit, ViewChild, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureMenuService } from './pure-menu.service';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { MENU_CONFIG } from '../../../configs/menu';

@Component({
  selector: 'pure-menu',
  templateUrl: './pure-menu.component.html',
  styleUrls: ['./pure-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMenu implements OnInit, AfterViewInit {
  @ViewChild('PURE_MENU') pureMenuScrollbar?: PerfectScrollbarDirective;

  menuData = MENU_CONFIG;

  isOpenedOrHoveringMenu$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  combineBehaviorSubjects$;
  combineSubscription: Subscription;

  constructor(
    private _menuService: PureMenuService,
    public _menuContainer: PureMenuContainerService,
    public _mainContainer: PureMainContainerService,
    public _settings: PureSettingsService) {
      const combineBehaviorSubjects = combineLatest(
        _menuContainer.canHover$,
        _menuContainer.isHovering$,
        _menuContainer.isOpened$,
      );

      this.combineSubscription = combineBehaviorSubjects.pipe(distinctUntilChanged()).subscribe(([
        canHover,
        isHovering,
        isOpened,
      ]) => {
        if (canHover && (isHovering || isOpened)) {
          if (!this.isOpenedOrHoveringMenu$.value) {
            this.isOpenedOrHoveringMenu$.next(true);
          }
        } else {
          if (this.isOpenedOrHoveringMenu$.value) {
            this.isOpenedOrHoveringMenu$.next(false);
          }
        }
      });
    }

  ngAfterViewInit() {

    /**
     * If there is activated memu item, scroll to it and make it is center of the menu
     */
    const activatingMenuItemRef = document.getElementsByClassName('pure-menu-content active');

    if (activatingMenuItemRef && activatingMenuItemRef[0]) {
      activatingMenuItemRef[0].scrollIntoView(true);

      // Menu has scroll all the way to bottom
      const pureMenu = this.pureMenuScrollbar.elementRef.nativeElement;

      // // 64 is the height of toolbar, 24 is half of the item height
      const centerScreenHeight = (window.innerHeight - 64) / 2 - 24;

      pureMenu.scrollTop -= centerScreenHeight;
    }
  }

  ngOnInit() {
    this._menuService.onActivatingMenuItem$.pipe(debounceTime(100), distinctUntilChanged()).subscribe(() => {
      // The menu have animation on height when menu expanding. Have to wait for animation done.
      // If no, there'll be a gap at bottom in some case.
      setTimeout(() => {
        this.pureMenuScrollbar.update();
      }, 300);
    });
  }
}
