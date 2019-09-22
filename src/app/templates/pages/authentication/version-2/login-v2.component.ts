import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-login-v2',
  template: `
    <auth-side-layout [title]="'LOGIN TO PURE'">
      <auth-login fxFill></auth-login>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginV2Component {
}
