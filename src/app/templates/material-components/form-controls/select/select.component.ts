import { Component } from '@angular/core';

import * as SIMPLE_SELECT_CODE from './examples/simple-select-example/simple-select-code';
import * as TWO_WAYS_BINDING_SELECT_CODE from './examples/two-way-binding-select-example/two-way-binding-select-code';
import * as SELECT_IN_A_FORM_CODE from './examples/select-in-a-form-example/select-in-a-form-code';
import * as FORM_FIELD_FEATURES_SELECT_CODE from './examples/form-field-features-select-example/form-field-features-select-code';
import * as DISABLED_SELECT_CODE from './examples/disabled-select-example/disabled-select-code';
import * as SELECT_WITH_RESET_CODE from './examples/select-with-reset-example/select-with-reset-code';
import * as SELECT_OPTION_GROUP_CODE from './examples/select-option-groups-example/select-option-groups-code';
import * as MULTIPLE_SELECTION_SELECT_CODE from './examples/multiple-selection-select-example/multiple-selection-select-code';
import * as CUSTOM_TRIGGER_TEXT_CODE from './examples/custom-trigger-text-select-example/custom-trigger-text-select-code';
import * as NO_RIPPLE_SELECT_CODE from './examples/no-ripple-select-example/no-ripple-select-code';
import * as CUSTOM_STYLE_SELECT_CODE from './examples/custom-style-select-example/custom-style-select-code';
import * as CUSTOM_ERROR_STATE_MATCHER_CODE from './examples/custom-error-matcher-example/custom-error-matcher-select-code';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  simpleSelectCode = SIMPLE_SELECT_CODE;
  twoWaysBindingSelectCode = TWO_WAYS_BINDING_SELECT_CODE;
  selectInAFormCode = SELECT_IN_A_FORM_CODE;
  formFieldFeaturesSelectCode = FORM_FIELD_FEATURES_SELECT_CODE;
  disabledSelectCode = DISABLED_SELECT_CODE;
  selectWithResetCode = SELECT_WITH_RESET_CODE;
  selectOptionGroupsCode = SELECT_OPTION_GROUP_CODE;
  multipleSelectionSelectCode = MULTIPLE_SELECTION_SELECT_CODE;
  customTriggerTextCode = CUSTOM_TRIGGER_TEXT_CODE;
  noRippleSelectCode = NO_RIPPLE_SELECT_CODE;
  customStyleSelectCode = CUSTOM_STYLE_SELECT_CODE;
  customErrorStateMatcherCode = CUSTOM_ERROR_STATE_MATCHER_CODE;
}
