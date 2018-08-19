import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureNotificationContainerService } from './pure-notification-container.service';
import { getToday } from '../../pure-utils/pure-date';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-notification-container',
  templateUrl: './pure-notification-container.component.html',
  styleUrls: ['./pure-notification-container.component.scss']
})
export class PureNotificationContainer implements OnInit {
  @ViewChild('pure_side_notification') pureSideNotification: ElementRef;

  events: any[] = [
    {
      name: 'Release First Version',
      time: '10:00 AM',
      place: ''
    },
    {
      name: 'Group Metting',
      time: '11:30 AM',
      place: ''
    },
    {
      name: 'Lunch with Boss',
      time: '12:30 PM',
      place: 'Skyler Restaurant'
    }
  ];

  notes: any[] = [
    {
      name: 'Buy some fish for dinner',
      createdTime: 'Today, 08:15 AM',
    },
    {
      name: 'Design some icons',
      createdTime: '2 days ago',
    }
  ];

  today = getToday();

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
