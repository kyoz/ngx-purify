import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Progress Spinner Components
import { ProgressSpinnerComponent } from './progress-spinner.component';

// Progress Spinner Examples
import { ProgressSpinnerOverviewExample } from './examples/progress-spinner-overview-example/progress-spinner-overview-example';

@NgModule({
  declarations: [
    // Progress Spinner Components
    ProgressSpinnerComponent,

    // Examples
    ProgressSpinnerOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ProgressSpinnerComponent }
    ])
  ]
})
export class ProgressSpinnerModule {}
