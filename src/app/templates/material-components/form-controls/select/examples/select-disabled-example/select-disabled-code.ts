export const html = `
<p>
  <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
</p>

<h4>mat-select</h4>
<mat-form-field>
  <mat-select placeholder="Choose an option" [disabled]="disableSelect.value">
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <select matNativeControl placeholder="Choose an option" [disabled]="disableSelect.value">
    <option value="" selected></option>
    <option value="volvo">Volvo</option>
    <option value="saab" disabled>Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-disabled-example',
  templateUrl: './select-disabled-example.html',
  styleUrls: ['./select-disabled-example.scss']
})
export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
`;

export const scss = `
h4 {
  padding: 16px 0;
}
`;
