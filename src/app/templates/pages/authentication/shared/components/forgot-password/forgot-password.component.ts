import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class AuthForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  email: FormControl;

  versionSuffix: string = '';

  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    this.createLinks();
    this.createFormControls();
    this.createForm();
  }

  // This is just an attemp to give better experience with two versions of this page
  createLinks() {
    this.versionSuffix = this._router.url === '/page/auth/forgot-password' ? '' : '-v2';
  }

  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  createForm() {
    this.forgotPasswordForm = new FormGroup({ email: this.email });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' :
        this.email.hasError('email') ? 'This is not a valid email' : '';
  }

  getCorrectVersionLink(link: string) {
    return link + this.versionSuffix;
  }
}
