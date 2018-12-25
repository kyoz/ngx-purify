import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Slide Toggle Components
import { SlideToggleComponent } from './slide-toggle.component';

// Slide Toggle Examples
import { ConfigurableSlideToggleExample } from './examples/configurable-slide-toggle-example/configurable-slide-toggle-example';

@NgModule({
  declarations: [
    // Slide Toggle Components
    SlideToggleComponent,

    // Examples
    ConfigurableSlideToggleExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SlideToggleComponent }
    ])
  ]
})
export class SlideToggleModule {}
