import { Component } from '@angular/core';

import * as BADGE_OVERVIEW_CODE from './examples/badge-overview-example/badge-overview-code';

@Component({
  selector: 'app-material-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  badgeOverviewCode = BADGE_OVERVIEW_CODE;
}
