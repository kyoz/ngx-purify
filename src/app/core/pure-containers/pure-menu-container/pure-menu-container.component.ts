import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import * as Hammer from 'hammerjs';
import { Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMenuContainer implements OnInit {
  isOpenedOrHoveringMenu$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  combineBehaviorSubjects$;
  combineSubscription: Subscription;

  @ViewChild('pure_menu_container') pureSideMenuContainer: ElementRef;

  @HostListener('mouseover') onMouseOver() {
    this._menuContainer.isHovering$.next(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._menuContainer.isHovering$.next(false);
  }

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _settings: PureSettingsService
  ) {
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

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideMenuContainer.nativeElement, {});

    // Actually, we can just use hammer.on('swipe') and detect if user swipe left or right for both
    // LTR and RTL direction, but i'v test and it not work well on mobile so for now, i do seperate em

    hammer.on('swiperight', () => {
      if (this._settings.currentTextDir$.value === 'RTL') {
        this._menuContainer.close();
      }
    });

    hammer.on('swipeleft', () => {
      if (this._settings.currentTextDir$.value === 'LTR') {
        this._menuContainer.close();
      }
    });
  }
}
