import { Component } from '@angular/core';

import * as CONFIGURABLE_SLIDER_CODE from './examples/configurable-slider-example/configurable-slider-code';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  configurableSliderCode = CONFIGURABLE_SLIDER_CODE;
}
