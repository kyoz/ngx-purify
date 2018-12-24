export const html = `
<h4>mat-select</h4>
<mat-form-field>
  <mat-select placeholder="Choose one" [formControl]="selected" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  <mat-error *ngIf="selected.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="selected.hasError('pattern') && !selected.hasError('required')">
    Your selection is invalid
  </mat-error>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field class="demo-full-width">
  <select matNativeControl placeholder="Choose one" [formControl]="nativeSelectFormControl" [errorStateMatcher]="matcher">
    <option value=""></option>
    <option value="valid" selected>Valid option</option>
    <option value="invalid">Invalid option</option>
  </select>
  <mat-error *ngIf="nativeSelectFormControl.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')">
    Your selection is invalid
  </mat-error>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'custom-error-matcher-select-example',
  templateUrl: './custom-error-matcher-select-example.html',
  styleUrls: ['./custom-error-matcher-select-example.scss']
})
export class CustomErrorMatcherSelectExample {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
`;

export const scss = `
h4 {
  padding: 16px 0;
}
`;
