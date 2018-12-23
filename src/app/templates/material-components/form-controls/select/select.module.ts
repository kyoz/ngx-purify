import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Select Components
import { SelectComponent } from './select.component';

// Select Examples
import { SimpleSelectExample } from './examples/simple-select-example/simple-select-example';
import { TwoWaysBindingSelectExample } from './examples/two-way-binding-select-example/two-way-binding-select-example';
import { SelectInAFormExample } from './examples/select-in-a-form/select-in-a-form-example';

@NgModule({
  declarations: [
    // Select Components
    SelectComponent,

    // Examples
    SimpleSelectExample,
    TwoWaysBindingSelectExample,
    SelectInAFormExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SelectComponent }
    ])
  ]
})
export class SelectModule {}
