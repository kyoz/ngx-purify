import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Checkbox Components
import { CheckboxComponent } from './checkbox.component';

// Checkbox Examples
import { SimpleCheckboxExample } from './examples/simple-checkbox-example/simple-checkbox-example';
import { ConfigurationCheckboxExample } from './examples/configuration-checkbox-example/configuration-checkbox-example';

@NgModule({
  declarations: [
    // Checkbox Components
    CheckboxComponent ,

    // Examples
    SimpleCheckboxExample,
    ConfigurationCheckboxExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: CheckboxComponent }
    ])
  ]
})
export class CheckboxModule {}
