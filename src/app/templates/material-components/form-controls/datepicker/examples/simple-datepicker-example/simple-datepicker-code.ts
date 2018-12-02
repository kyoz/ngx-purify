export const html = `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-datepicker-example',
  templateUrl: 'simple-datepicker-example.html',
  styleUrls: ['simple-datepicker-example.scss'],
})
export class SimpleDatepickerExample {}
`;

export const scss = `
/** No CSS for this example */
`;
