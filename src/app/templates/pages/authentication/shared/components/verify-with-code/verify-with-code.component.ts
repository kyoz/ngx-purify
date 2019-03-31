import { Component } from '@angular/core';

@Component({
  selector: 'auth-verify-with-code',
  templateUrl: './verify-with-code.component.html',
  styleUrls: ['./verify-with-code.component.scss']
})
export class AuthVerifyWithCodeComponent {
  verifyCode: string;
}
