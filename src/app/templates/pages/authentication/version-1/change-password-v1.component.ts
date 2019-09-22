import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-change-password-v1',
  template: `
    <auth-center-layout [title]="'CHANGE PASSWORD'">
      <auth-change-password fxFill></auth-change-password>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthChangePasswordV1Component {
}

