import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Input Components
import { InputComponent } from './input.component';

// Input Examples
import { InputOverviewExample } from './examples/input-overview-example/input-overview-example';
import { InputErrorStateMatcherExample } from './examples/input-error-state-matcher-example/input-error-state-matcher-example';
import { AutoResizeTextareaExample } from './examples/auto-resize-textarea-example/auto-resize-textarea-example';
import { InputWithClearButtonExample } from './examples/input-with-clear-button-example/input-with-clear-button-example';
import { InputWithErrorMessageExample } from './examples/input-with-error-message-example/input-with-error-message-example';
import { InputInFormExample } from './examples/input-in-form-example/input-in-form-example';
import { InputWithHintExample } from './examples/input-with-hint-example/input-with-hint-example';
import { InputWithPrefixSuffixExample } from './examples/input-with-prefix-suffix-example/input-with-prefix-suffix-example';

const COMPONENTS = [
  // Input Components
  InputComponent,

  // Examples
  InputOverviewExample,
  InputErrorStateMatcherExample,
  AutoResizeTextareaExample,
  InputWithClearButtonExample,
  InputWithErrorMessageExample,
  InputInFormExample,
  InputWithHintExample,
  InputWithPrefixSuffixExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class InputModule {}
