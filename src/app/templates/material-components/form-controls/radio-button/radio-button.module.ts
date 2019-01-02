import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Radio Button Components
import { RadioButtonComponent } from './radio-button.component';

// Radio Button Examples
import { RadioButtonNgModelExample } from './examples/radio-button-ngmodel-example/radio-button-ngmodel-example';

const COMPONENTS = [
  // Checkbox Components
  RadioButtonComponent,

  // Examples
  RadioButtonNgModelExample
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
export class RadioButtonModule {}
