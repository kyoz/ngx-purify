import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'error-form-field-example',
  templateUrl: './error-form-field-example.html',
  styleUrls: ['./error-form-field-example.scss']
})
export class ErrorFormFieldExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
