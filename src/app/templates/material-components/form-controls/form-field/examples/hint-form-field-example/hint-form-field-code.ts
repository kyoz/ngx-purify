export const html = `
<div class="example-container">
  <mat-form-field hintLabel="Max 10 characters">
    <input matInput #input maxlength="10" placeholder="Enter some input">
    <mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
  </mat-form-field>

  <mat-form-field>
    <mat-select placeholder="Select me">
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
  </mat-form-field>
</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'hint-form-field-example',
  templateUrl: './hint-form-field-example.html',
  styleUrls: ['./hint-form-field-example.scss']
})
export class HintFormFieldExample {
}
`;

export const scss = `
.example-container {
  display: flex;
  flex-direction: column;
}

.example-container > * {
  width: 100%;
}
`;
