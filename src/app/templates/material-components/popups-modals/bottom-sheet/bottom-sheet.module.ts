import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Bottom Sheet Components
import { BottomSheetComponent } from './bottom-sheet.component';

// Bottom Sheet Examples
import {
  BottomSheetOverviewExample, BottomSheetOverviewExampleSheet
} from './examples/bottom-sheet-overview-example/bottom-sheet-overview-example';

@NgModule({
  declarations: [
    // Bottom Sheet Components
    BottomSheetComponent,

    // Examples
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: BottomSheetComponent }
    ])
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ]
})
export class BottomSheetModule {}
