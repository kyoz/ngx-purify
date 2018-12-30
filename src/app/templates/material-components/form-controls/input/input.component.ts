import { Component } from '@angular/core';

import * as INPUT_OVERVIEW_CODE from './examples/input-overview-example/input-overview-code';
import * as INPUT_ERROR_STATE_MATCHER_CODE from './examples/input-error-state-matcher-example/input-error-state-matcher-code';
import * as AUTO_RESIZING_TEXTAREA_CODE from './examples/auto-resize-textarea-example/auto-resize-textarea-code';
import * as INPUT_WITH_CLEAR_BUTTON_CODE from './examples/input-with-clear-button-example/input-with-clear-button-code';
import * as INPUT_WITH_ERROR_MESSAGES_CODE from './examples/input-with-error-message-example/input-with-error-message-code';
import * as INPUT_IN_FORM_CODE from './examples/input-in-form-example/input-in-form-code';
import * as INPUT_WITH_HINTS_CODE from './examples/input-with-hint-example/input-with-hint-code';
import * as INPUT_WITH_PREFIX_SUFFIX_CODE from './examples/input-with-prefix-suffix-example/input-with-prefix-suffix-code';

@Component({
  selector: 'app-material-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputOverviewCode = INPUT_OVERVIEW_CODE;
  inputErrorStateMatcherCode = INPUT_ERROR_STATE_MATCHER_CODE;
  autoResizingTextareaCode = AUTO_RESIZING_TEXTAREA_CODE;
  inputWithClearButtonCode = INPUT_WITH_CLEAR_BUTTON_CODE;
  inputWithErrorMessagesCode = INPUT_WITH_ERROR_MESSAGES_CODE;
  inputInFormCode = INPUT_IN_FORM_CODE;
  inputWithHintsCode = INPUT_WITH_HINTS_CODE;
  inputWithPrefixSuffixCode = INPUT_WITH_PREFIX_SUFFIX_CODE;
}
