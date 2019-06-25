import { Component } from '@angular/core';

@Component({
  selector: 'auth-session-v1',
  template: `
    <auth-center-layout [showLogo]="false" [showTitle]="false">
      <auth-session fxFill></auth-session>
    </auth-center-layout>
  `
})
export class AuthSessionV1Component {
}
