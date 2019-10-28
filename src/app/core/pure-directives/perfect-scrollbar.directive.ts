import { Directive, Input, OnDestroy, NgZone, Optional, Inject, PLATFORM_ID, KeyValueDiffers, ElementRef } from '@angular/core';
import { PerfectScrollbarDirective, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PureSettingsService } from '../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[purePerfectScrollbar]',
  exportAs: 'purePerfectScrollbar'
})
export class PurePerfectScrollbarDirective extends PerfectScrollbarDirective implements OnDestroy {
  @Input() disabled: boolean;

  private scrollbarStyleSubscription: Subscription;
  private cleanSubscription = true;

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Optional() @Inject(PERFECT_SCROLLBAR_CONFIG) private _defaults: PerfectScrollbarConfigInterface,
    public _elementRef: ElementRef,
    private _zone: NgZone,
    private _differs: KeyValueDiffers,
    private _deviceDetector: DeviceDetectorService,
    private _settings: PureSettingsService) {
      super(_zone, _differs, _elementRef, _platformId, _defaults);
      this.disabled = !_deviceDetector.isDesktop();
      this._defaults.wheelSpeed = !_deviceDetector.isDesktop() ? 10 : 1;

      // Alway disable perfect scrollbar on phone to use native scroll
      if (_deviceDetector.isMobile()) {
        this.disabled = true;
      }

      // Detect when scrollbar style change (only on desktop)
      if (this._deviceDetector.isDesktop() && !this.scrollbarStyleSubscription) {
        this.scrollbarStyleSubscription = this._settings.currentScrollbarStyle$
          .pipe(distinctUntilChanged()).subscribe((scrollbarStyle: string) => {
            switch (scrollbarStyle) {
              case 'default':
                if (!this.disabled) {
                  this.cleanSubscription = false;
                  this.disabled = true;
                  this.ngOnDestroy();
                }
                break;
              case 'perfect':
                if (this.disabled) {
                  this.disabled = false;
                  this.ngOnInit();
                  break;
                }
            }
          });
      }
  }

  ngOnDestroy() {
    if (this.cleanSubscription && this.scrollbarStyleSubscription) {
      this.scrollbarStyleSubscription.unsubscribe();
      this.scrollbarStyleSubscription = undefined;
    }

    this.cleanSubscription = true;

    super.ngOnDestroy();
  }
}
