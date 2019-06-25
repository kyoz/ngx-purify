import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorStateMatcher: ErrorStateMatcher = new MyErrorStateMatcher();

  versionSuffix: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.createLinks();
    this.buildForm();
  }

  // This is just an attemp to give better experience with two versions of this page
  createLinks() {
    this.versionSuffix = this._router.url === '/page/auth/register' ? '' : '-v2';
  }

  buildForm() {
    this.registerForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this._formBuilder.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: this.checkConfirmPasswords })
    });
  }

  checkConfirmPasswords(group: FormGroup) {
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;

    return password === confirmPassword ? null : { notSamePassword: true };
  }

  getEmailErrorMessage() {
    return this.registerForm.get('email').hasError('required') ? 'You must enter an email' :
      this.registerForm.get('email').hasError('email') ? 'This is not a valid email' : '';
  }

  getCorrectVersionLink(link: string) {
    return link + this.versionSuffix;
  }
}
