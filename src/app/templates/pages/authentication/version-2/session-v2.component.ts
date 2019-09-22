import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-session-v2',
  template: `
    <auth-side-layout [showLogo]="false" [showTitle]="false">
      <auth-session fxFill></auth-session>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionV2Component {
}
