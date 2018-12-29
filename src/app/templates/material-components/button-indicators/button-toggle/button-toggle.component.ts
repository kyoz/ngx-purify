import { Component } from '@angular/core';

import * as BUTTON_TOGGLE_OVERVIEW_CODE from './examples/button-toggle-overview-example/button-toggle-overview-code';

@Component({
  selector: 'app-material-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {
  buttonToggleOverviewCode = BUTTON_TOGGLE_OVERVIEW_CODE;
}
