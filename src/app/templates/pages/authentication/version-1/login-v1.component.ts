import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-login-v1',
  template: `
    <auth-center-layout [title]="'LOGIN TO PURE'">
      <auth-login fxFill></auth-login>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginV1Component {
}
