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
  selector: 'open-method-datepicker-example',
  templateUrl: 'open-method-datepicker-example.html',
  styleUrls: ['open-method-datepicker-example.scss'],
})
export class OpenMethodDatepickerExample {}
`;

export const scss = `
/** No CSS for this example */
`;
