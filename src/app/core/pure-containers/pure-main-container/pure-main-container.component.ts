import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

// Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { PureSettingsContainerService } from '../pure-settings-container/pure-settings-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from './pure-main-container.service';
import { DeviceDetectorService } from 'ngx-device-detector';

// Rxjs
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pure-main-container',
  templateUrl: './pure-main-container.component.html',
  styleUrls: ['./pure-main-container.component.scss']
})
export class PureMainContainer implements OnInit, OnDestroy {

  isBackdropVisible = false;
  combineSubscription: Subscription;

  _onWindowResize = this.onWindowResize.bind(this);

  @Input() minimalMode = false;
  @ViewChild('PURE_MAIN_CONTAINER') pureMainContainer: ElementRef;

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService,
    private _deviceDetection: DeviceDetectorService
  ) {
    const combineBehaviorSubjects = combineLatest(
      _menuContainer.isOpened$,
      _chatboxContainer.isOpened$,
      _notificationContainer.isOpened$,
      _mainContainer.isFullWidth$
    );

    this.combineSubscription = combineBehaviorSubjects.pipe(distinctUntilChanged()).subscribe(([
      isMenuOpened,
      isChatboxOpened,
      isNotificationOpened,
      isFullWidth
    ]) => {
      if (((isMenuOpened || isChatboxOpened) && !isFullWidth) || isNotificationOpened) {
        this.isBackdropVisible = true;
      } else {
        this.isBackdropVisible = false;
      }
    });
   }

  ngOnInit() {
    // Init for pure settings
    this._settings.init();

    // Add Event Listeners
    if (this._deviceDetection.isDesktop()) {
      window.addEventListener('resize', this._onWindowResize);
    }
  }

  ngOnDestroy() {
    if (this.combineSubscription) {
      this.combineSubscription.unsubscribe();
    }
  }

  onWindowResize() {
    // Disable animation
    this._settings.disableAnimation$.next(true);
    // Init for side menu & chatbox
    this._mainContainer.isFullWidth$.next(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);
    this._menuContainer.reset();
    this._notificationContainer.reset();
  }

  closeBackdrop() {
    if (!this._mainContainer.isFullWidth$.value) {
      this._menuContainer.close();
    }
    this._chatboxContainer.close();
    this._notificationContainer.close();
  }
}
