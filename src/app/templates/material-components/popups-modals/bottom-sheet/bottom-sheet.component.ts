import { Component } from '@angular/core';

import * as BOTTOM_SHEET_OVERVIEW_CODE from './examples/bottom-sheet-overview-example/bottom-sheet-overview-code';

@Component({
  selector: 'app-material-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  bottomSheetOverviewCode = BOTTOM_SHEET_OVERVIEW_CODE;
}
