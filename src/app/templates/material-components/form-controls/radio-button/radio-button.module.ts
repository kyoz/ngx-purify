import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Radio Button Components
import { RadioButtonComponent } from './radio-button.component';

// Radio Button Examples
import { NgModelRadioButtonExample } from './examples/ngmodel-radio-button-example/ngmodel-radio-button-example';

@NgModule({
  declarations: [
    // Checkbox Components
    RadioButtonComponent,

    // Examples
    NgModelRadioButtonExample
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
