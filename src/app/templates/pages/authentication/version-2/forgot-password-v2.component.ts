import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-forgot-password-v2',
  template: `
    <auth-side-layout [title]="'PASSWORD RECOVERY'">
      <auth-forgot-password fxFill></auth-forgot-password>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthForgotPasswordV2Component {
}
