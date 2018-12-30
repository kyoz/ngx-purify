import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Slide Toggle Components
import { SlideToggleComponent } from './slide-toggle.component';

// Slide Toggle Examples
import { SlideToggleConfigurableExample } from './examples/slide-toggle-configurable-example/slide-toggle-configurable-example';

@NgModule({
  declarations: [
    // Slide Toggle Components
    SlideToggleComponent,

    // Examples
    SlideToggleConfigurableExample
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
