import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';

@Component({
  selector: 'pure-notification-container',
  templateUrl: './pure-notification-container.component.html',
  styleUrls: ['./pure-notification-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureNotificationContainer {
  @ViewChild('pure_notification_container') pureSideNotificationContainer: ElementRef;

  constructor(
    public _notificationContainer: PureNotificationContainerService,
    public _settings: PureSettingsService) { }
}
