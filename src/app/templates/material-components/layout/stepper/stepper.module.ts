import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Stepper Components
import { StepperComponent } from './stepper.component';

// Stepper Examples
import { StepperOverviewExample } from './examples/stepper-overview-example/stepper-overview-example';

const COMPONENTS = [
  // Stepper Components
  StepperComponent,

  // Examples
  StepperOverviewExample
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
export class StepperModule {}
