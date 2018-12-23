export const html = `
<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<p>You selected: {{selected}}</p>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: '2-way-binding-select-example',
  templateUrl: './2-way-binding-select-example.html',
  styleUrls: ['./2-way-binding-select-example.scss']
})
export class TwoWaysBindingSelectExample {
  selected = 'option2';
}
`;

export const scss = `
/** No CSS for this example */
`;
