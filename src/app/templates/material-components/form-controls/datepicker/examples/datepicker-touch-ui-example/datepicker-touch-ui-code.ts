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
  selector: 'datepicker-touch-ui-example',
  templateUrl: 'datepicker-touch-ui-example.html',
  styleUrls: ['datepicker-touch-ui-example.scss'],
})
export class DatepickerTouchUIExample {}
`;

export const scss = `
/** No CSS for this example */
`;
