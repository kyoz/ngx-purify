export const html = `
<mat-form-field>
  <mat-select placeholder="Select an option" disableRipple>
    <mat-option value="1">Option 1</mat-option>
    <mat-option value="2">Option 2</mat-option>
    <mat-option value="3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'no-ripple-select-example',
  templateUrl: './no-ripple-select-example.html',
  styleUrls: ['./no-ripple-select-example.scss']
})
export class NoRippleSelectExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
