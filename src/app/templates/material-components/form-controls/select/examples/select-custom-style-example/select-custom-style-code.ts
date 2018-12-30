export const html = `
<mat-form-field>
  <mat-select placeholder="Panel color" [formControl]="panelColor"
              panelClass="example-panel-{{panelColor.value}}">
    <mat-option value="red">Red</mat-option>
    <mat-option value="green">Green</mat-option>
    <mat-option value="blue">Blue</mat-option>
  </mat-select>
</mat-form-field>
`;

export const ts = `
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-custom-style-example',
  templateUrl: './select-custom-style-example.html',
  styleUrls: ['./select-custom-style-example.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectCustomStyleExample {
  panelColor = new FormControl('red');
}
`;

export const scss = `
.example-panel-red.mat-select-panel {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green.mat-select-panel {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue.mat-select-panel {
  background: rgba(0, 0, 255, 0.5);
}
`;
