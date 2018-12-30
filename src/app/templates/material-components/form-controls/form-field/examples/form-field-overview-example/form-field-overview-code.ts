export const html = `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Input">
  </mat-form-field>

  <mat-form-field>
    <textarea matInput placeholder="Textarea"></textarea>
  </mat-form-field>

  <mat-form-field>
    <mat-select placeholder="Select">
      <mat-option value="option">Option</mat-option>
    </mat-select>
  </mat-form-field>
</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'form-field-overview-example',
  templateUrl: './form-field-overview-example.html',
  styleUrls: ['./form-field-overview-example.scss']
})
export class FormFieldOverviewExample {
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
