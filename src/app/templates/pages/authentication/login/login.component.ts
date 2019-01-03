import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formCtrl = {
    email: undefined,
    password: undefined
  }

  constructor() {
    this.formCtrl.email = new FormControl('', [Validators.required, Validators.email]);
    this.formCtrl.password = new FormControl('', [Validators.required]);
  }

  getEmailErrorMessage() {
    return this.formCtrl.email.hasError('required') ? 'You must enter an email' :
        this.formCtrl.email.hasError('email') ? 'This is not a valid email' : '';
  }
}
