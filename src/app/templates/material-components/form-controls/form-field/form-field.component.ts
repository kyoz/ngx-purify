import { Component } from '@angular/core';

import * as FORM_FIELD_OVERVIEW_CODE from './examples/form-field-overview-example/form-field-overview-code';
import * as FORM_FIELD_LABEL_CODE from './examples/form-field-label-example/form-field-label-code';
import * as FORM_FIELD_HINT_CODE from './examples/form-field-hint-example/form-field-hint-code';
import * as FORM_FIELD_ERROR_CODE from './examples/form-field-error-example/form-field-error-code';
import * as FORM_FIELD_PREFIX_SUFFIX_CODE from './examples/form-field-prefix-suffix-example/form-field-prefix-suffix-code';
import * as FORM_FIELD_THEMING_CODE from './examples/form-field-theming-example/form-field-theming-code';

@Component({
  selector: 'app-material-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  formFieldOverviewCode = FORM_FIELD_OVERVIEW_CODE;
  formFieldLabelCode = FORM_FIELD_LABEL_CODE;
  formFieldHintCode = FORM_FIELD_HINT_CODE;
  formFieldErrorCode = FORM_FIELD_ERROR_CODE;
  formFieldPrefixSuffixCode = FORM_FIELD_PREFIX_SUFFIX_CODE;
  formFieldThemingCode = FORM_FIELD_THEMING_CODE;
}
