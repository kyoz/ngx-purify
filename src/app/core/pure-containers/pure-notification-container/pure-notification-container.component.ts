import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureSettingsService } from '../../pure-components/pure-settings/pure-settings.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-notification-container',
  templateUrl: './pure-notification-container.component.html',
  styleUrls: ['./pure-notification-container.component.scss']
})
export class PureNotificationContainer implements OnInit {
  @ViewChild('pure_notification_container') pureSideNotificationContainer: ElementRef;

  constructor(
    public _notificationContainer: PureNotificationContainerService,
    public _settings: PureSettingsService) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideNotificationContainer.nativeElement, {});

    hammer.on('swipe', event => {
      if (event.direction === 4 && this._settings.textDirection === 'LTR') { // Right
        this._notificationContainer.close();
      }
      if (event.direction === 2 && this._settings.textDirection === 'RTL') { // Left
        this._notificationContainer.close();
      }
    });
  }
}
