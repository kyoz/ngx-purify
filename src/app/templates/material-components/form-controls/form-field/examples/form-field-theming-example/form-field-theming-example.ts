import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-field-theming-example',
  templateUrl: './form-field-theming-example.html',
  styleUrls: ['./form-field-theming-example.scss']
})
export class FormFieldThemingExample {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
}
