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
  selector: 'simple-form-field-example',
  templateUrl: './simple-form-field-example.html',
  styleUrls: ['./simple-form-field-example.scss']
})
export class SimpleFormFieldExample {
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
