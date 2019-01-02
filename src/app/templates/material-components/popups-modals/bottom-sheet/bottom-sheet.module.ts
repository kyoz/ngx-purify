import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Bottom Sheet Components
import { BottomSheetComponent } from './bottom-sheet.component';

// Bottom Sheet Examples
import {
  BottomSheetOverviewExample, BottomSheetOverviewExampleSheet
} from './examples/bottom-sheet-overview-example/bottom-sheet-overview-example';

const COMPONENTS = [
  // Bottom Sheet Components
  BottomSheetComponent,

  // Examples
  BottomSheetOverviewExample,
  BottomSheetOverviewExampleSheet
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ],
  exports: [
    COMPONENTS
  ]
})
export class BottomSheetModule {}
