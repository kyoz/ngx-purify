import { Component } from '@angular/core';

import * as DIVIDER_OVERVIEW_CODE from './examples/divider-overview-example/divider-overview-code';

@Component({
  selector: 'app-material-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  dividerOverviewCode = DIVIDER_OVERVIEW_CODE;
}
