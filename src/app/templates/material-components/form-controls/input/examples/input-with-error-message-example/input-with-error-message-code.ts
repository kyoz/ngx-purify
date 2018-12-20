export const html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Email" [formControl]="emailFormControl">
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
</form>
`;

export const ts = `
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'input-with-error-message-example',
  templateUrl: './input-with-error-message-example.html',
  styleUrls: ['./input-with-error-message-example.scss']
})
export class InputWithErrorMessageExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
`;

export const scss = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
`;
