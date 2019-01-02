import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Progress Bar Components
import { ProgressBarComponent } from './progress-bar.component';

// Progress Bar Examples
import { ProgressBarOverviewExample } from './examples/progress-bar-overview-example/progress-bar-overview-example';

const COMPONENTS = [
  // Progress Bar Components
  ProgressBarComponent,

  // Examples
  ProgressBarOverviewExample
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
export class ProgressBarModule {}
