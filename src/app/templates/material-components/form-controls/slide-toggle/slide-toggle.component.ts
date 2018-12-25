import { Component } from '@angular/core';

import * as CONFIGURABLE_SLIDE_TOGGLE_CODE from './examples/configurable-slide-toggle-example/configurable-slide-toggle-code';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {
  configurableSlideToggleCode = CONFIGURABLE_SLIDE_TOGGLE_CODE;
}
