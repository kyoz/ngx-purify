import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef,
  ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';
import { Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

// Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { PureSettingsContainerService } from '../pure-settings-container/pure-settings-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureGlobalService } from '../../pure-services/pure-global.service';
import { PureMainContainerService } from './pure-main-container.service';
import { DeviceDetectorService } from 'ngx-device-detector';

// Rxjs
import { combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pure-main-container',
  templateUrl: './pure-main-container.component.html',
  styleUrls: ['./pure-main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMainContainer implements OnInit, OnDestroy {
  @Input() minimalMode = false;
  @ViewChild('PURE_MAIN_CONTAINER', { static: false }) pureMainContainer: ElementRef;

  private subscriptions: Map<String, Subscription> = new Map();

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isBackdropVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  _onWindowResize = this.onWindowResize.bind(this);
  windowResize$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService,
    private _global: PureGlobalService,
    private _deviceDetection: DeviceDetectorService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.initSubscriptionToDetectChange();

    // Subscribe for router navigations
    this._global.onRouterEventEmit$.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    // Subscribe for window resize
    const windowResizeSubscription = this.windowResize$.pipe(debounceTime(200)).subscribe(res => {
      if (res) {
        // Disable animation
        this._settings.disableAnimation$.next(true);

        // Init for side menu & chatbox
        this._mainContainer.isFullWidth$.next(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);
        this._menuContainer.reset();
        this._notificationContainer.reset();

        // Detect changes
        this._changeDetectorRef.detectChanges();
      }
    });

    this.subscriptions.set('onWindowResize', windowResizeSubscription);
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
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  // To boost perfectly performance, i'v do use OnPush Strategy and just detectChange when necessary
  // With the large app and much more components, it'll boost the performance to best of possible
  initSubscriptionToDetectChange() {
    const combineBehaviorSubjects = combineLatest(
      this._mainContainer.isFullWidth$,
      this._menuContainer.isOpened$,
      this._chatboxContainer.isOpened$,
      this._notificationContainer.isOpened$
    ).pipe(distinctUntilChanged());

    const combineSubscription = combineBehaviorSubjects.subscribe(([
      isFullWidth,
      isMenuOpened,
      isChatboxOpened,
      isNotificationOpened
    ]) => {
      // Check when backdrop should show
      if (((isMenuOpened || isChatboxOpened) && !isFullWidth) || isNotificationOpened) {
        this.isBackdropVisible$.next(true);
      } else {
        this.isBackdropVisible$.next(false);
      }
    });

    this.subscriptions.set('combinePureEvents', combineSubscription);
  }

  onWindowResize() {
    this.windowResize$.next(new Date());
  }

  closeBackdrop() {
    if (!this._mainContainer.isFullWidth$.value) {
      this._menuContainer.close();
    }
    this._chatboxContainer.close();
    this._notificationContainer.close();
  }

   // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading$.next(true);
    }

    if (event instanceof NavigationEnd) {
      this.isLoading$.next(false);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading$.next(false);
    }

    if (event instanceof NavigationError) {
      this.isLoading$.next(false);
    }
  }
}
