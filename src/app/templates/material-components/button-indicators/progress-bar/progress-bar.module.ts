import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Progress Bar Components
import { ProgressBarComponent } from './progress-bar.component';

// Progress Bar Examples
import { ProgressBarOverviewExample } from './examples/progress-bar-overview-example/progress-bar-overview-example';

@NgModule({
  declarations: [
    // Progress Bar Components
    ProgressBarComponent,

    // Examples
    ProgressBarOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ProgressBarComponent }
    ])
  ]
})
export class ProgressBarModule {}
