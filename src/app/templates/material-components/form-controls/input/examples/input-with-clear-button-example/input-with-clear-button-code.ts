export const html = `
<mat-form-field class="example-form-field">
  <input matInput type="text" placeholder="Clearable input" [(ngModel)]="value">
  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
    <mat-icon>close</mat-icon>
  </button>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-with-clear-button-example',
  templateUrl: './input-with-clear-button-example.html',
  styleUrls: ['./input-with-clear-button-example.scss']
})
export class InputWithClearButtonExample {
  value = 'Clear me';
}
`;

export const scss = `
.example-form-field {
  width: 200px;
}
`;
