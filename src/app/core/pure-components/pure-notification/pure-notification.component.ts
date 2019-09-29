import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DateUtils } from '../../../shared/utils/date';

@Component({
  selector: 'pure-notification',
  templateUrl: './pure-notification.component.html',
  styleUrls: ['./pure-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureNotification {

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

  today = DateUtils.getToday();

  constructor() { }
}
