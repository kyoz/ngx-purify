export const html = `
<mat-button-toggle-group #group="matButtonToggleGroup">
  <mat-button-toggle value="left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify" disabled>
    <mat-icon>format_align_justify</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
<div class="example-selected-value">Selected value: {{group.value}}</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: './button-toggle-overview-example.html',
  styleUrls: ['./button-toggle-overview-example.scss']
})
export class ButtonToggleOverviewExample {
}
`;

export const scss = `
.example-selected-value {
  margin: 15px 0;
}
`;
