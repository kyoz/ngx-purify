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
