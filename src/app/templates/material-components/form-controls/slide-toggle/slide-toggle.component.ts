import { Component } from '@angular/core';

import * as SLIDE_TOGGLE_CONFIGURABLE_CODE from './examples/slide-toggle-configurable-example/slide-toggle-configurable-code';

@Component({
  selector: 'app-material-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {
  slideToggleConfigurableCode = SLIDE_TOGGLE_CONFIGURABLE_CODE;
}
