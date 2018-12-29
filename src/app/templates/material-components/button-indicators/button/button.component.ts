import { Component } from '@angular/core';

import * as BUTTON_VARIETIES_CODE from './examples/button-varieties-example/button-varieties-code';

@Component({
  selector: 'app-material-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  buttonVarietiesCode = BUTTON_VARIETIES_CODE;
}
