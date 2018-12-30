export const html = `
<div class="example-container">
  <form class="example-container" [formGroup]="options">
    <mat-checkbox formControlName="hideRequired">Hide required marker</mat-checkbox>
    <div>
      <label>Float label: </label>
      <mat-radio-group formControlName="floatLabel">
        <mat-radio-button value="auto">Auto</mat-radio-button>
        <mat-radio-button value="always">Always</mat-radio-button>
        <mat-radio-button value="never">Never</mat-radio-button>
      </mat-radio-group>
    </div>
  </form>

  <mat-form-field
      [hideRequiredMarker]="options.value.hideRequired"
      [floatLabel]="options.value.floatLabel">
    <input matInput placeholder="Simple placeholder" required>
  </mat-form-field>

  <mat-form-field [floatLabel]="options.value.floatLabel">
    <mat-label>Have both label and placeholder</mat-label>
    <input matInput placeholder="Simple placeholder">
  </mat-form-field>

  <mat-form-field
      [hideRequiredMarker]="options.value.hideRequired"
      [floatLabel]="options.value.floatLabel">
    <mat-select required>
      <mat-option>-- None --</mat-option>
      <mat-option value="option">Option 1</mat-option>
      <mat-option value="option">Option 2</mat-option>
    </mat-select>
    <mat-label><mat-icon>favorite</mat-icon> <b> Lovely</b> <i> label</i></mat-label>
  </mat-form-field>
</div>
`;

export const ts = `
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
`;

export const scss = `
.example-container {
  display: flex;
  flex-direction: column;
}

.example-container > * {
  width: 100%;
}

.example-container form {
  margin-bottom: 20px;
}

.example-container form > * {
  margin: 5px 0;
}

.example-container .mat-radio-button {
  margin: 0 5px;
}
`;
