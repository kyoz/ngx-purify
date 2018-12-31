import { Component } from '@angular/core';

import * as SNACKBAR_OVERVIEW_CODE from './examples/snackbar-overview-example/snackbar-overview-code';

@Component({
  selector: 'app-material-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  snackbarOverviewCode = SNACKBAR_OVERVIEW_CODE;
}
