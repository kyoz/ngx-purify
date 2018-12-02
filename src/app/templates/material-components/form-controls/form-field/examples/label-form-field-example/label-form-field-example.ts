import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'label-form-field-example',
  templateUrl: './label-form-field-example.html',
  styleUrls: ['./label-form-field-example.scss']
})
export class LabelFormFieldExample {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
