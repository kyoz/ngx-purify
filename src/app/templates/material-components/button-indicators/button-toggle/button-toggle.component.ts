import { Component } from '@angular/core';

import * as SIMPLE_BUTTON_TOGGLE_CODE from './examples/simple-button-toggle-example/simple-button-toggle-code';

@Component({
  selector: 'app-material-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {
  simpleButtonToggleCode = SIMPLE_BUTTON_TOGGLE_CODE;
}
