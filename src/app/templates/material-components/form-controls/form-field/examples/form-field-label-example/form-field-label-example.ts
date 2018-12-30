import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-field-label-example',
  templateUrl: './form-field-label-example.html',
  styleUrls: ['./form-field-label-example.scss']
})
export class FormFieldLabelExample {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
