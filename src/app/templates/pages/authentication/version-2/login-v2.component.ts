import { Component } from '@angular/core';

@Component({
  selector: 'auth-login-v2',
  template: `
    <auth-side-layout [title]="'LOGIN TO PURE'">
      <auth-login fxFill></auth-login>
    </auth-side-layout>
  `
})
export class AuthLoginV2Component {
}
