import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Button Toggle Components
import { ButtonToggleComponent } from './button-toggle.component';

// Button Toggle Examples
import { ButtonToggleOverviewExample } from './examples/button-toggle-overview-example/button-toggle-overview-example';

const COMPONENTS = [
  // Button Toggle Components
  ButtonToggleComponent,

  // Examples
  ButtonToggleOverviewExample
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
export class ButtonToggleModule {}
