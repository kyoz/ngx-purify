import { Component } from '@angular/core';

@Component({
  selector: 'auth-session-v2',
  template: `
    <auth-side-layout [showLogo]="false" [showTitle]="false">
      <auth-session fxFill></auth-session>
    </auth-side-layout>
  `
})
export class AuthSessionV2Component {
}
