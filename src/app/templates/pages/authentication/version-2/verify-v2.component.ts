import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-verify-v2',
  template: `
    <auth-side-layout [title]="'VERIFY ACCOUNT'">
      <auth-verify fxFill></auth-verify>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyV2Component {
}
