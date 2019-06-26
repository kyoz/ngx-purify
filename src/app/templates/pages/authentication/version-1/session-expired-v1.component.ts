import { Component } from '@angular/core';

@Component({
  selector: 'auth-session-expired-v1',
  template: `
    <auth-center-layout [showLogo]="false" [showTitle]="false">
      <auth-session-expired fxFill></auth-session-expired>
    </auth-center-layout>
  `
})
export class AuthSessionExpiredV1Component {
}
