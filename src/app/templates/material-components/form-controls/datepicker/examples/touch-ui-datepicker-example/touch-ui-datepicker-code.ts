export const html = `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker touchUi #picker></mat-datepicker>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'touch-ui-datepicker-example',
  templateUrl: 'touch-ui-datepicker-example.html',
  styleUrls: ['touch-ui-datepicker-example.scss'],
})
export class TouchUIDatepickerExample {}
`;

export const scss = `
/** No CSS for this example */
`;
