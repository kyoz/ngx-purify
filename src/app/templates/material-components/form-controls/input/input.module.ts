import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [
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
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: InputComponent }
    ])
  ]
})
export class InputModule {}
