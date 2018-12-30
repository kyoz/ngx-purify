import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Select Components
import { SelectComponent } from './select.component';

// Select Examples
import { SelectOverviewExample } from './examples/select-overview-example/select-overview-example';
import { SelectTwoWaysBindingExample } from './examples/select-two-way-binding-example/select-two-way-binding-example';
import { SelectInAFormExample } from './examples/select-in-a-form-example/select-in-a-form-example';
import { SelectFormFieldFeaturesExample } from './examples/select-form-field-features-example/select-form-field-features-example';
import { SelectDisabledExample } from './examples/select-disabled-example/select-disabled-example';
import { SelectWithResetExample } from './examples/select-with-reset-example/select-with-reset-example';
import { SelectOptionGroupsExample } from './examples/select-option-groups-example/select-option-groups-example';
import { SelectMultipleSelectionExample } from './examples/select-multiple-selection-example/select-multiple-selection-example';
import { SelectCustomTriggerTextExample } from './examples/select-custom-trigger-text-example/select-custom-trigger-text-example';
import { SelectNoRippleExample } from './examples/select-no-ripple-example/select-no-ripple-example';
import { SelectCustomStyleExample } from './examples/select-custom-style-example/select-custom-style-example';
import { SelectCustomErrorMatcherExample } from './examples/select-custom-error-matcher-example/select-custom-error-matcher-example';

@NgModule({
  declarations: [
    // Select Components
    SelectComponent,

    // Examples
    SelectOverviewExample,
    SelectTwoWaysBindingExample,
    SelectInAFormExample,
    SelectFormFieldFeaturesExample,
    SelectDisabledExample,
    SelectWithResetExample,
    SelectOptionGroupsExample,
    SelectMultipleSelectionExample,
    SelectCustomTriggerTextExample,
    SelectNoRippleExample,
    SelectCustomStyleExample,
    SelectCustomErrorMatcherExample
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
