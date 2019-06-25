import { Component } from '@angular/core';

@Component({
  selector: 'auth-register-v1',
  template: `
    <auth-center-layout [title]="'CREATE AN ACCOUNT'">
      <auth-register fxFill></auth-register>
    </auth-center-layout>
  `
})
export class AuthRegisterV1Component {
}
