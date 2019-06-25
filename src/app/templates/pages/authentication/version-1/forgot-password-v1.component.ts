import { Component } from '@angular/core';

@Component({
  selector: 'auth-forgot-password-v1',
  template: `
    <auth-center-layout [title]="'PASSWORD RECOVERY'">
      <auth-forgot-password fxFill></auth-forgot-password>
    </auth-center-layout>
  `
})
export class AuthForgotPasswordV1Component {
}
