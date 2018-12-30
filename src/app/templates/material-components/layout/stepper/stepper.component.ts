import { Component } from '@angular/core';

import * as STEPPER_OVERVIEW_CODE from './examples/stepper-overview-example/stepper-overview-code';

@Component({
  selector: 'app-material-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  stepperOverviewCode = STEPPER_OVERVIEW_CODE;
}
