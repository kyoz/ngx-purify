export const html = `
<div>
  <mat-button-toggle-group #colorToggle="matButtonToggleGroup"
                           value="primary"
                           aria-label="Change color">
    <mat-button-toggle value="primary"> Primary </mat-button-toggle>
    <mat-button-toggle value="accent"> Accent </mat-button-toggle>
  </mat-button-toggle-group>
  <span class="example-button-toggle-label"> Color </span>
</div>

<div>
  <mat-button-toggle-group #backgroundColorToggle="matButtonToggleGroup"
                           value="primary"
                           aria-label="Change color">
    <mat-button-toggle value="primary"> Primary </mat-button-toggle>
    <mat-button-toggle value="accent"> Accent </mat-button-toggle>
  </mat-button-toggle-group>
  <span class="example-button-toggle-label"> Background Color </span>
</div>

<mat-tab-group [color]="colorToggle.value" [backgroundColor]="backgroundColorToggle.value">
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-theme-example',
  templateUrl: './tab-theme-example.html',
  styleUrls: ['./tab-theme-example.scss']
})
export class TabThemeExample {
}
`;

export const scss = `
.example-button-toggle-label {
  display: inline-block;
  margin: 16px;
}
`;
