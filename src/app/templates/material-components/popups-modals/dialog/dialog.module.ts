import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Dialog Components
import { DialogComponent } from './dialog.component';

// Dialog Examples
import {
  DialogOverviewExample, DialogOverviewExampleDialog
} from './examples/dialog-overview-example/dialog-overview-example';

const COMPONENTS = [
  // Dialog Components
  DialogComponent,

  // Examples
  DialogOverviewExample,
  DialogOverviewExampleDialog
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  exports: [
    COMPONENTS
  ]
})
export class DialogModule {}
