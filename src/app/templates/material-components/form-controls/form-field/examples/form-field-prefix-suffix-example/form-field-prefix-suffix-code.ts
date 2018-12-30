export const html = `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your password" [type]="hide ? 'password' : 'text'">
    <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
  </mat-form-field>

  <mat-form-field>
    <input matInput placeholder="Amount" type="number" class="example-right-align">
    <span matPrefix>$&nbsp;</span>
    <span matSuffix>.00</span>
  </mat-form-field>
</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'form-field-prefix-suffix-example',
  templateUrl: './form-field-prefix-suffix-example.html',
  styleUrls: ['./form-field-prefix-suffix-example.scss']
})
export class FormFieldPrefixSuffixExample {
  hide = true;
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

.example-right-align {
  text-align: right;
}

input.example-right-align::-webkit-outer-spin-button,
input.example-right-align::-webkit-inner-spin-button {
  display: none;
}

input.example-right-align {
  -moz-appearance: textfield;
}
`;
