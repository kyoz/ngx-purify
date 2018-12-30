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
  selector: 'select-no-ripple-example',
  templateUrl: './select-no-ripple-example.html',
  styleUrls: ['./select-no-ripple-example.scss']
})
export class SelectNoRippleExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
