export const html = `
<mat-form-field class="example-user-input">
  <mat-select placeholder="Tooltip position" [formControl]="position">
    <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
      {{positionOption}}
    </mat-option>
  </mat-select>
</mat-form-field>

<button mat-raised-button
        matTooltip="Info about the action"
        [matTooltipPosition]="position.value"
        aria-label="Button that displays a tooltip in various positions">
  Action
</button>
`;


export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'tooltip-position-example',
  templateUrl: './tooltip-position-example.html',
  styleUrls: ['./tooltip-position-example.scss']
})
export class TooltipPositionExample {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
`;

export const scss = `
.example-user-input {
  margin-right: 8px;
}
`;
