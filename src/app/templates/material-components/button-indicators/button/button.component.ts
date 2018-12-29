import { Component } from '@angular/core';

import * as BUTTON_OVERVIEW_CODE from './examples/button-overview-example/button-overview-code';

@Component({
  selector: 'app-material-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  buttonOverviewCode = BUTTON_OVERVIEW_CODE;
}
