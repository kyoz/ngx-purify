import { Component } from '@angular/core';

@Component({
  selector: 'auth-register-v2',
  template: `
    <auth-side-layout [title]="'CREATE AN ACCOUNT'">
      <auth-register fxFill></auth-register>
    </auth-side-layout>
  `
})
export class AuthRegisterV2Component {
}
