import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  versionSuffix: string = '';

  constructor(
    public _settings: PureSettingsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.createLinks();
    this.createFormControls();
    this.createForm();
  }

  // This is just an attemp to give better experience with two versions of this page
  createLinks() {
    this.versionSuffix = this._router.url === '/pages/auth/login' ? '' : '-v2';
  }

  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'This is not a valid email' : '';
  }

  getCorrectVersionLink(link: string) {
    return link + this.versionSuffix;
  }
}
