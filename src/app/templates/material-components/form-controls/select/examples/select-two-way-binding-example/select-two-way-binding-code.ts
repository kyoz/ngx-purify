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
  selector: 'select-two-way-binding-example',
  templateUrl: './select-two-way-binding-example.html',
  styleUrls: ['./select-two-way-binding-example.scss']
})
export class SelectTwoWaysBindingExample {
  selected = 'option2';
}
`;

export const scss = `
/** No CSS for this example */
`;
