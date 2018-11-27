import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import { Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

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

  _onMouseOver = this.onMouseOver.bind(this);
  _onMouseLeave = this.onMouseLeave.bind(this);

  @ViewChild('pure_menu_container') pureSideMenuContainer: ElementRef;

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _settings: PureSettingsService,
    private _deviceDetect: DeviceDetectorService
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
    if (this._deviceDetect.isDesktop()) {
      this.addEventListeners();
    }
  }

  addEventListeners() {
    this.pureSideMenuContainer.nativeElement.addEventListener('mouseover', this._onMouseOver);
    this.pureSideMenuContainer.nativeElement.addEventListener('mouseleave', this._onMouseLeave);
  }

  onMouseLeave() {
    this._menuContainer.isHovering$.next(false);
  }

  onMouseOver() {
    this._menuContainer.isHovering$.next(true);
  }
}
