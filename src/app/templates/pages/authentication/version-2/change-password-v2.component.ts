import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-change-password-v2',
  template: `
    <auth-side-layout [title]="'CHANGE PASSWORD'">
      <auth-change-password fxFill></auth-change-password>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthChangePasswordV2Component {
}

