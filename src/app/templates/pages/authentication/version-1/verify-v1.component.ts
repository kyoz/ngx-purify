import { Component } from '@angular/core';

@Component({
  selector: 'auth-verify-v1',
  template: `
    <auth-center-layout [title]="'VERIFY ACCOUNT'">
      <auth-verify fxFill></auth-verify>
    </auth-center-layout>
  `
})
export class AuthVerifyV1Component {
}
