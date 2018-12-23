import { Component } from '@angular/core';

import * as SIMPLE_INPUT_CODE from './examples/simple-input-example/simple-input-code';
import * as ERROR_STATE_MATCHER_INPUT_CODE from './examples/error-state-matcher-input-example/error-state-matcher-input-code';
import * as AUTO_RESIZING_TEXTAREA_CODE from './examples/auto-resize-textarea-example/auto-resize-textarea-code';
import * as INPUT_WITH_CLEAR_BUTTON_CODE from './examples/input-with-clear-button-example/input-with-clear-button-code';
import * as INPUT_WITH_ERROR_MESSAGES_CODE from './examples/input-with-error-message-example/input-with-error-message-code';
import * as INPUT_IN_FORM_CODE from './examples/input-in-form-example/input-in-form-code';
import * as INPUT_WITH_HINTS_CODE from './examples/input-with-hint-example/input-with-hint-code';
import * as INPUT_WITH_PREFIX_SUFFIX_CODE from './examples/input-with-prefix-suffix-example/input-with-prefix-suffix-code';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  simpleInputCode = SIMPLE_INPUT_CODE;
  errorStateMatcherInputCode = ERROR_STATE_MATCHER_INPUT_CODE;
  autoResizingTextareaCode = AUTO_RESIZING_TEXTAREA_CODE;
  inputWithClearButtonCode = INPUT_WITH_CLEAR_BUTTON_CODE;
  inputWithErrorMessagesCode = INPUT_WITH_ERROR_MESSAGES_CODE;
  inputInFormCode = INPUT_IN_FORM_CODE;
  inputWithHintsCode = INPUT_WITH_HINTS_CODE;
  inputWithPrefixSuffixCode = INPUT_WITH_PREFIX_SUFFIX_CODE;
}
