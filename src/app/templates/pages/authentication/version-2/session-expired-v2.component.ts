import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-session-expired-v2',
  template: `
    <auth-side-layout [showLogo]="false" [showTitle]="false">
      <auth-session-expired fxFill></auth-session-expired>
    </auth-side-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionExpiredV2Component {
}
