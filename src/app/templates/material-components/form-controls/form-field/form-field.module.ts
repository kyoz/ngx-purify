import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Formfield Components
import { FormFieldComponent } from './form-field.component';

// Formfield Examples
import { FormFieldOverviewExample } from './examples/form-field-overview-example/form-field-overview-example';
import { FormFieldLabelExample } from './examples/form-field-label-example/form-field-label-example';
import { FormFieldHintExample } from './examples/form-field-hint-example/form-field-hint-example';
import { FormFieldErrorExample } from './examples/form-field-error-example/form-field-error-example';
import { FormFieldPrefixSuffixExample } from './examples/form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './examples/form-field-theming-example/form-field-theming-example';

@NgModule({
  declarations: [
    // Formfield Components
    FormFieldComponent,

    // Examples
    FormFieldOverviewExample,
    FormFieldLabelExample,
    FormFieldHintExample,
    FormFieldErrorExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: FormFieldComponent }
    ])
  ]
})
export class FormFieldModule {}
