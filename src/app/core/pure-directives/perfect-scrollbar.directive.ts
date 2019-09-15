import { Directive, Input, NgZone, Optional, Inject, PLATFORM_ID, KeyValueDiffers, ElementRef } from '@angular/core';
import { PerfectScrollbarDirective, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[purePerfectScrollbar]',
  exportAs: 'purePerfectScrollbar'
})
export class PurePerfectScrollbarDirective extends PerfectScrollbarDirective {
  @Input() disabled;

  constructor(
    private _zone: NgZone,
    private _differs: KeyValueDiffers,
    public _elementRef: ElementRef,
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Optional() @Inject(PERFECT_SCROLLBAR_CONFIG) private _defaults: PerfectScrollbarConfigInterface,
    private _deviceDetector: DeviceDetectorService) {
      super(_zone, _differs, _elementRef, _platformId, _defaults);
      this.disabled = !_deviceDetector.isDesktop();
      this._defaults.wheelSpeed = !_deviceDetector.isDesktop() ? 10 : 1;
    }
}
