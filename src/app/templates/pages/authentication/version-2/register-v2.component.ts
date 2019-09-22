import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-register-v2',
  template: `
    <auth-side-layout [title]="'CREATE AN ACCOUNT'">
      <auth-register fxFill></auth-register>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthRegisterV2Component {
}
