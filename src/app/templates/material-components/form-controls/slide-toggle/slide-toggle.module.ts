import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Slide Toggle Components
import { SlideToggleComponent } from './slide-toggle.component';

// Slide Toggle Examples
import { SlideToggleConfigurableExample } from './examples/slide-toggle-configurable-example/slide-toggle-configurable-example';

const COMPONENTS = [
  // Slide Toggle Components
  SlideToggleComponent,

  // Examples
  SlideToggleConfigurableExample
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
export class SlideToggleModule {}
