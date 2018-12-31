import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Dialog Components
import { DialogComponent } from './dialog.component';

// Dialog Examples
import {
  DialogOverviewExample, DialogOverviewExampleDialog
} from './examples/dialog-overview-example/dialog-overview-example';

@NgModule({
  declarations: [
    // Dialog Components
    DialogComponent,

    // Examples
    DialogOverviewExample,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: DialogComponent }
    ])
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ]
})
export class DialogModule {}
