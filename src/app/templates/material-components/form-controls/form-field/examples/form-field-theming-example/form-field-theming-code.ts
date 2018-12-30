export const html = `
<form class="example-container" [formGroup]="options" [style.fontSize.px]="getFontSize()">
  <mat-form-field [color]="options.value.color">
    <mat-select placeholder="Color" formControlName="color">
      <mat-option value="primary">Primary</mat-option>
      <mat-option value="accent">Accent</mat-option>
      <mat-option value="warn">Warn</mat-option>
    </mat-select>
  </mat-form-field>

  <mat-form-field [color]="options.value.color">
    <input matInput type="number" placeholder="Font size (px)" formControlName="fontSize" min="10">
    <mat-error *ngIf="options.get('fontSize')?.invalid">Min size: 10px</mat-error>
  </mat-form-field>
</form>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-field-theming-example',
  templateUrl: './form-field-theming-example.html',
  styleUrls: ['./form-field-theming-example.scss']
})
export class FormFieldThemingExample {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
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
