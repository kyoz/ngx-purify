import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Button Components
import { ButtonComponent } from './button.component';

// Button Examples
import { ButtonOverviewExample } from './examples/button-overview-example/button-overview-example';

const COMPONENTS = [
  // Button Components
  ButtonComponent,

  // Examples
  ButtonOverviewExample
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
export class ButtonModule {}
