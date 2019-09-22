import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-forgot-password-v1',
  template: `
    <auth-center-layout [title]="'PASSWORD RECOVERY'">
      <auth-forgot-password fxFill></auth-forgot-password>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthForgotPasswordV1Component {
}
