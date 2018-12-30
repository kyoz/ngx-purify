import { Component } from '@angular/core';

import * as RADIO_BUTTON_NGMODEL_CODE from './examples/radio-button-ngmodel-example/radio-button-ngmodel-code';

@Component({
  selector: 'app-material-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  radioButtonNgModelCode = RADIO_BUTTON_NGMODEL_CODE;
}
