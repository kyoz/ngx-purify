export const html = `
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp1" placeholder="Completely disabled" disabled>
    <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
    <mat-datepicker #dp1></mat-datepicker>
  </mat-form-field>
</p>

<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp2" placeholder="Popup disabled">
    <mat-datepicker-toggle matSuffix [for]="dp2" disabled></mat-datepicker-toggle>
    <mat-datepicker #dp2></mat-datepicker>
  </mat-form-field>
</p>

<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp3" placeholder="Input disabled" disabled>
    <mat-datepicker-toggle matSuffix [for]="dp3"></mat-datepicker-toggle>
    <mat-datepicker #dp3 disabled="false"></mat-datepicker>
  </mat-form-field>
</p>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'datepicker-disabled-example',
  templateUrl: 'datepicker-disabled-example.html',
  styleUrls: ['datepicker-disabled-example.scss'],
})
export class DatepickerDisabledExample {}
`;

export const scss = `
/** No CSS for this example */
`;
