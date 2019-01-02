import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Slider Components
import { SliderComponent } from './slider.component';

// Slider Examples
import { SliderConfigurableExample } from './examples/slider-configurable-example/slider-configurable-example';

const COMPONENTS = [
  // Slider Components
  SliderComponent,

  // Examples
  SliderConfigurableExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SliderModule {}
