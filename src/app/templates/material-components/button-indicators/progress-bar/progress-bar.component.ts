import { Component } from '@angular/core';

import * as PROGRESS_BAR_OVERVIEW_CODE from './examples/progress-bar-overview-example/progress-bar-overview-code';

@Component({
  selector: 'app-material-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  progressBarOverviewCode = PROGRESS_BAR_OVERVIEW_CODE;
}
