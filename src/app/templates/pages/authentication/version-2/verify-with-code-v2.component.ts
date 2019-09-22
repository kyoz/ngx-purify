import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-verify-with-code-v2',
  template: `
    <auth-side-layout [title]="'VERIFY ACCOUNT'">
      <auth-verify-with-code fxFill></auth-verify-with-code>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyWithCodeV2Component {
}
