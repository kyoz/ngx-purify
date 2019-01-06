import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;

  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  model = {
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined
  };

  createFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'This is not a valid email' : '';
  }
}
