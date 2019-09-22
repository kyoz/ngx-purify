import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-session-v1',
  template: `
    <auth-center-layout [showLogo]="false" [showTitle]="false">
      <auth-session fxFill></auth-session>
    </auth-center-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionV1Component {
}
