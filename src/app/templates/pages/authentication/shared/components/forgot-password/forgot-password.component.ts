import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class AuthForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  email: FormControl;

  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  createForm() {
    this.forgotPasswordForm = new FormGroup({ email: this.email });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' :
        this.email.hasError('email') ? 'This is not a valid email' : '';
  }
}
