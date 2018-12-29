import { Component } from '@angular/core';

import * as SIMPLE_FORM_FIELD_CODE from './examples/simple-form-field-example/simple-form-field-code';
import * as LABEL_FORM_FIELD_CODE from './examples/label-form-field-example/label-form-field-code';
import * as HINT_FORM_FIELD_CODE from './examples/hint-form-field-example/hint-form-field-code';
import * as ERROR_FORM_FIELD_CODE from './examples/error-form-field-example/error-form-field-code';
import * as PREFIX_SUFFIX_FORM_FIELD_CODE from './examples/prefix-suffix-form-field-example/prefix-suffix-form-field-code';
import * as THEMING_FORM_FIELD_CODE from './examples/theming-form-field-example/theming-form-field-code';

@Component({
  selector: 'app-material-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  simpleFormFieldCode = SIMPLE_FORM_FIELD_CODE;
  labelFormFieldCode = LABEL_FORM_FIELD_CODE;
  hintFormFieldCode = HINT_FORM_FIELD_CODE;
  errorFormFieldCode = ERROR_FORM_FIELD_CODE;
  prefixSuffixFormFieldCode = PREFIX_SUFFIX_FORM_FIELD_CODE;
  themingFormFieldCode = THEMING_FORM_FIELD_CODE;
}
