import { Component } from '@angular/core';

import * as SLIDER_CONFIGURABLE_CODE from './examples/slider-configurable-example/slider-configurable-code';

@Component({
  selector: 'app-material-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliderConfigurableCode = SLIDER_CONFIGURABLE_CODE;
}
