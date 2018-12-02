import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'theming-form-field-example',
  templateUrl: './theming-form-field-example.html',
  styleUrls: ['./theming-form-field-example.scss']
})
export class ThemingFormFieldExample {
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
