import { Component } from '@angular/core';

import * as BADGE_OVERVIEW_CODE from './examples/simple-badge-example/simple-badge-code';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  badgeOverviewCode = BADGE_OVERVIEW_CODE;
}
