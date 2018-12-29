import { Component } from '@angular/core';

import * as NGMODEL_RADIO_BUTTON from './examples/ngmodel-radio-button-example/ngmodel-radio-button-code';

@Component({
  selector: 'app-material-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  ngModelRadioButton = NGMODEL_RADIO_BUTTON;
}
