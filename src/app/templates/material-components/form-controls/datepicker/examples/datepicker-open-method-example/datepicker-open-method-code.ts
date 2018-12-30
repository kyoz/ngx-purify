export const html = `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open Datepicker</button>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'datepicker-open-method-example',
  templateUrl: 'datepicker-open-method-example.html',
  styleUrls: ['datepicker-open-method-example.scss'],
})
export class DatepickerOpenMethodExample {}
`;

export const scss = `
/** No CSS for this example */
`;
