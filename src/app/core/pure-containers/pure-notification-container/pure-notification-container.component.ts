import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureNotificationContainerService } from './pure-notification-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-notification-container',
  templateUrl: './pure-notification-container.component.html',
  styleUrls: ['./pure-notification-container.component.scss']
})
export class PureNotificationContainer implements OnInit {
  @ViewChild('pure_side_notification') pureSideNotification: ElementRef;

  constructor(public _notification: PureNotificationContainerService) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideNotification.nativeElement, {});
    hammer.on('swiperight', ev => {
      this._notification.close();
    });
  }
}
