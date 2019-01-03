import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss']
})
export class PureMenuContainer implements OnInit, OnDestroy {
  _onMouseEnter = this.onMouseEnter.bind(this);
  _onMouseLeave = this.onMouseLeave.bind(this);

  @ViewChild('pure_menu_container') pureSideMenuContainer: ElementRef;

  subscriptions: Subscription[] = [];

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _settings: PureSettingsService,
    private _deviceDetect: DeviceDetectorService,
    private _changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    if (this._deviceDetect.isDesktop()) {
      this.addEventListeners();
    }

    const subscription = this._menuContainer.isOpenedOrHoveringMenu$.pipe(distinctUntilChanged()).subscribe(() => {
      this._changeDetector.detectChanges();
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      if (subscription) {
        subscription.unsubscribe();
      }
    }
  }

  addEventListeners() {
    this.pureSideMenuContainer.nativeElement.addEventListener('mouseenter', this._onMouseEnter);
    this.pureSideMenuContainer.nativeElement.addEventListener('mouseleave', this._onMouseLeave);
  }

  onMouseLeave() {
    if (this._menuContainer.isHovering) {
      this._menuContainer.isHovering$.next(false);
    }
  }

  onMouseEnter() {
    if (!this._menuContainer.isHovering) {
      this._menuContainer.isHovering$.next(true);
    }
  }
}
