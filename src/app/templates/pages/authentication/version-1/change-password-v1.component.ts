import { Component } from '@angular/core';

@Component({
  selector: 'auth-change-password-v1',
  template: `
    <auth-center-layout [title]="'CHANGE PASSWORD'">
      <auth-change-password fxFill></auth-change-password>
    </auth-center-layout>
  `
})
export class AuthChangePasswordV1Component {
}

