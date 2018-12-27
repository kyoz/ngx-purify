import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Stepper Components
import { StepperComponent } from './stepper.component';

// Stepper Examples
import { SimpleStepperExample } from './examples/simple-stepper-example/simple-stepper-example';

@NgModule({
  declarations: [
    // Stepper Components
    StepperComponent,

    // Examples
    SimpleStepperExample
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
