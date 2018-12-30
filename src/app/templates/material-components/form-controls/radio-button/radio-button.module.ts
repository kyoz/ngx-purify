import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Radio Button Components
import { RadioButtonComponent } from './radio-button.component';

// Radio Button Examples
import { RadioButtonNgModelExample } from './examples/radio-button-ngmodel-example/radio-button-ngmodel-example';

@NgModule({
  declarations: [
    // Checkbox Components
    RadioButtonComponent,

    // Examples
    RadioButtonNgModelExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: RadioButtonComponent }
    ])
  ]
})
export class RadioButtonModule {}
