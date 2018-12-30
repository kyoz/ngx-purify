export const html = `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your email" [formControl]="email" required>
    <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
</div>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-field-error-example',
  templateUrl: './form-field-error-example.html',
  styleUrls: ['./form-field-error-example.scss']
})
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
`;

export const scss = `
.example-container {
  display: flex;
  flex-direction: column;
}

.example-container > * {
  width: 100%;
}
`;
