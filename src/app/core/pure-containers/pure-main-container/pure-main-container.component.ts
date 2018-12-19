import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

// Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { PureSettingsContainerService } from '../pure-settings-container/pure-settings-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from './pure-main-container.service';
import { DeviceDetectorService } from 'ngx-device-detector';

// Rxjs
import { combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pure-main-container',
  templateUrl: './pure-main-container.component.html',
  styleUrls: ['./pure-main-container.component.scss']
})
export class PureMainContainer implements OnInit, OnDestroy {

  isLoading: boolean = false;
  isBackdropVisible: boolean = false;
  combineSubscription: Subscription;

  _onWindowResize = this.onWindowResize.bind(this);

  windowResize$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  @Input() minimalMode = false;
  @ViewChild('PURE_MAIN_CONTAINER') pureMainContainer: ElementRef;

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService,
    private _deviceDetection: DeviceDetectorService,
    private _router: Router,
    private _changeDetector: ChangeDetectorRef
  ) {
    this.initSubscriptionToDetectChange();

    // Subscribe for router navigations
    this._router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    // Subscribe for window resize
    this.windowResize$.pipe(debounceTime(200)).subscribe(res => {
      if (res) {
        // Disable animation
        this._settings.disableAnimation$.next(true);

        // Init for side menu & chatbox
        this._mainContainer.isFullWidth$.next(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);
        this._menuContainer.reset();
        this._notificationContainer.reset();

        // Detect changes
        this._changeDetector.detectChanges();
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

  // To boost perfectly performance, i'v do use OnPush Strategy and just detectChange when necessary
  // With the large app and much more components, it'll boost the performance to best of possible
  initSubscriptionToDetectChange() {
    const combineBehaviorSubjects = combineLatest(
      this._mainContainer.isFullWidth$,
      this._menuContainer.isOpened$,
      this._chatboxContainer.isOpened$,
      this._notificationContainer.isOpened$
    ).pipe(distinctUntilChanged());

    this.combineSubscription = combineBehaviorSubjects.subscribe(([
      isFullWidth,
      isMenuOpened,
      isChatboxOpened,
      isNotificationOpened
    ]) => {
      // Check when backdrop should show
      if (((isMenuOpened || isChatboxOpened) && !isFullWidth) || isNotificationOpened) {
        this.isBackdropVisible = true;
      } else {
        this.isBackdropVisible = false;
      }
    });
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
      this.isLoading = true;
    }

    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }

    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
