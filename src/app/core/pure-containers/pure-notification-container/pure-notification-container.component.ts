import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
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

    // Actually, we can just use hammer.on('swipe') and detect if user swipe left or right for both
    // LTR and RTL direction, but i'v test and it not work well on mobile so for now, i do seperate em

    hammer.on('swiperight', () => {
      if (this._settings.currentSettings.textDirection === 'LTR') {
        this._notificationContainer.close();
      }
    });

    hammer.on('swipeleft', () => {
      if (this._settings.currentSettings.textDirection === 'RTL') {
        this._notificationContainer.close();
      }
    });
  }
}
