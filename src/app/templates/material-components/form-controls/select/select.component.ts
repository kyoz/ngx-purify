import { Component } from '@angular/core';

import * as SELECT_OVERVIEW_CODE from './examples/select-overview-example/select-overview-code';
import * as SELECT_TWO_WAYS_BINDING_CODE from './examples/select-two-way-binding-example/select-two-way-binding-code';
import * as SELECT_IN_A_FORM_CODE from './examples/select-in-a-form-example/select-in-a-form-code';
import * as SELECT_FORM_FIELD_FEATURES_CODE from './examples/select-form-field-features-example/select-form-field-features-code';
import * as SELECT_DISABLED_CODE from './examples/select-disabled-example/select-disabled-code';
import * as SELECT_WITH_RESET_CODE from './examples/select-with-reset-example/select-with-reset-code';
import * as SELECT_OPTION_GROUP_CODE from './examples/select-option-groups-example/select-option-groups-code';
import * as SELECT_MULTIPLE_SELECTION_CODE from './examples/select-multiple-selection-example/select-multiple-selection-code';
import * as SELECT_CUSTOM_TRIGGER_TEXT_CODE from './examples/select-custom-trigger-text-example/select-custom-trigger-text-code';
import * as SELECT_NO_RIPPLE_CODE from './examples/select-no-ripple-example/select-no-ripple-code';
import * as SELECT_CUSTOM_STYLE_CODE from './examples/select-custom-style-example/select-custom-style-code';
import * as SELECT_CUSTOM_ERROR_STATE_MATCHER_CODE from './examples/select-custom-error-matcher-example/select-custom-error-matcher-code';

@Component({
  selector: 'app-material-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  selectOverviewCode = SELECT_OVERVIEW_CODE;
  selectTwoWaysBindingCode = SELECT_TWO_WAYS_BINDING_CODE;
  selectInAFormCode = SELECT_IN_A_FORM_CODE;
  selectFormFieldFeaturesCode = SELECT_FORM_FIELD_FEATURES_CODE;
  selectDisabledCode = SELECT_DISABLED_CODE;
  selectWithResetCode = SELECT_WITH_RESET_CODE;
  selectOptionGroupsCode = SELECT_OPTION_GROUP_CODE;
  selectMultipleSelectionCode = SELECT_MULTIPLE_SELECTION_CODE;
  selectCustomTriggerTextCode = SELECT_CUSTOM_TRIGGER_TEXT_CODE;
  selectNoRippleCode = SELECT_NO_RIPPLE_CODE;
  selectCustomStyleCode = SELECT_CUSTOM_STYLE_CODE;
  selectCustomErrorStateMatcherCode = SELECT_CUSTOM_ERROR_STATE_MATCHER_CODE;
}
