import { Component } from '@angular/core';

import * as SIMPLE_STEPPER_CODE from './examples/simple-stepper-example/simple-stepper-code';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  simpleStepperCode = SIMPLE_STEPPER_CODE;
}
