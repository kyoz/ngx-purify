import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-register-v1',
  template: `
    <auth-center-layout [title]="'CREATE AN ACCOUNT'">
      <auth-register fxFill></auth-register>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthRegisterV1Component {
}
