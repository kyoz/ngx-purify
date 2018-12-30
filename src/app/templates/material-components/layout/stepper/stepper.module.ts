import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Stepper Components
import { StepperComponent } from './stepper.component';

// Stepper Examples
import { StepperOverviewExample } from './examples/stepper-overview-example/stepper-overview-example';

@NgModule({
  declarations: [
    // Stepper Components
    StepperComponent,

    // Examples
    StepperOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: StepperComponent}
    ])
  ]
})
export class StepperModule {}
