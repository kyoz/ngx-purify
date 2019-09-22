import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-verify-v1',
  template: `
    <auth-center-layout [title]="'VERIFY ACCOUNT'">
      <auth-verify fxFill></auth-verify>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyV1Component {
}
