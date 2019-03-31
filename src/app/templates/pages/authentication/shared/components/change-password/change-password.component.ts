import { Component } from '@angular/core';
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
  selector: 'auth-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class AuthChangePasswordComponent {
  changePasswordForm: FormGroup;
  errorStateMatcher: ErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder) {
    this.changePasswordForm = this._formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: this._formBuilder.group({
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
}

