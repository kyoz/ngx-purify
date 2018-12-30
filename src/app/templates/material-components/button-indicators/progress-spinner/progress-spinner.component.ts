import { Component } from '@angular/core';

import * as PROGRESS_SPINNER_OVERVIEW_CODE from './examples/progress-spinner-overview-example/progress-spinner-overview-code';

@Component({
  selector: 'app-material-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  progressSpinnerOverviewCode = PROGRESS_SPINNER_OVERVIEW_CODE;
}
