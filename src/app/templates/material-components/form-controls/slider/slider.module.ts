import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Slider Components
import { SliderComponent } from './slider.component';

// Slider Examples
import { SliderConfigurableExample } from './examples/slider-configurable-example/slider-configurable-example';

@NgModule({
  declarations: [
    // Slider Components
    SliderComponent,

    // Examples
    SliderConfigurableExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SliderComponent }
    ])
  ]
})
export class SliderModule {}
