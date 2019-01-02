import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Progress Spinner Components
import { ProgressSpinnerComponent } from './progress-spinner.component';

// Progress Spinner Examples
import { ProgressSpinnerOverviewExample } from './examples/progress-spinner-overview-example/progress-spinner-overview-example';

const COMPONENTS = [
  // Progress Spinner Components
  ProgressSpinnerComponent,

  // Examples
  ProgressSpinnerOverviewExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ProgressSpinnerModule {}
