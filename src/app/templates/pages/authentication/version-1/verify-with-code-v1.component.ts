import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-verify-with-code-v1',
  template: `
    <auth-center-layout [title]="'VERIFY ACCOUNT'">
      <auth-verify-with-code fxFill></auth-verify-with-code>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyWithCodeV1Component {
}
