import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Formfield Components
import { FormFieldComponent } from './form-field.component';

// Formfield Examples
import { SimpleFormFieldExample } from './examples/simple-form-field-example/simple-form-field-example';
import { LabelFormFieldExample } from './examples/label-form-field-example/label-form-field-example';
import { HintFormFieldExample } from './examples/hint-form-field-example/hint-form-field-example';
import { ErrorFormFieldExample } from './examples/error-form-field-example/error-form-field-example';
import { PrefixSuffixFormFieldExample } from './examples/prefix-suffix-form-field-example/prefix-suffix-form-field-example';
import { ThemingFormFieldExample } from './examples/theming-form-field-example/theming-form-field-example';

@NgModule({
  declarations: [
    // Formfield Components
    FormFieldComponent,

    // Examples
    SimpleFormFieldExample,
    LabelFormFieldExample,
    HintFormFieldExample,
    ErrorFormFieldExample,
    PrefixSuffixFormFieldExample,
    ThemingFormFieldExample
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
