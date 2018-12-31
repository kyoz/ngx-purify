import { Component } from '@angular/core';

import * as DIALOG_OVERVIEW_CODE from './examples/dialog-overview-example/dialog-overview-code';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  dialogOverviewCode = DIALOG_OVERVIEW_CODE;
}
