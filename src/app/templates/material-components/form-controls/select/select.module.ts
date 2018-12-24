import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Select Components
import { SelectComponent } from './select.component';

// Select Examples
import { SimpleSelectExample } from './examples/simple-select-example/simple-select-example';
import { TwoWaysBindingSelectExample } from './examples/two-way-binding-select-example/two-way-binding-select-example';
import { SelectInAFormExample } from './examples/select-in-a-form-example/select-in-a-form-example';
import { FormFieldFeaturesSelectExample } from './examples/form-field-features-select-example/form-field-features-select-example';
import { DisabledSelectExample } from './examples/disabled-select-example/disabled-select-example';
import { SelectWithResetExample } from './examples/select-with-reset-example/select-with-reset-example';
import { SelectOptionGroupsExample } from './examples/select-option-groups-example/select-option-groups-example';
import { MultipleSelectionSelectExample } from './examples/multiple-selection-select-example/multiple-selection-select-example';
import { CustomTriggerTextSelectExample } from './examples/custom-trigger-text-select-example/custom-trigger-text-select-example';
import { NoRippleSelectExample } from './examples/no-ripple-select-example/no-ripple-select-example';
import { CustomStyleSelectExample } from './examples/custom-style-select-example/custom-style-select-example';
import { CustomErrorMatcherSelectExample } from './examples/custom-error-matcher-example/custom-error-matcher-select-example';

@NgModule({
  declarations: [
    // Select Components
    SelectComponent,

    // Examples
    SimpleSelectExample,
    TwoWaysBindingSelectExample,
    SelectInAFormExample,
    FormFieldFeaturesSelectExample,
    DisabledSelectExample,
    SelectWithResetExample,
    SelectOptionGroupsExample,
    MultipleSelectionSelectExample,
    CustomTriggerTextSelectExample,
    NoRippleSelectExample,
    CustomStyleSelectExample,
    CustomErrorMatcherSelectExample
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
