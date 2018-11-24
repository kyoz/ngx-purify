export const SIMPLE_AUTOCOMPLETE_CODE = {
html : `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one number" aria-label="Number" matInput [formControl]="optionCtrl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of options" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
`,

ts : `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'simple-autocomplete-example',
  templateUrl: './simple-autocomplete-example.html',
  styleUrls: ['./simple-autocomplete-example.scss']
})
export class SimpleAutocompleteExample {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
`,

scss : `
.example-form {
  width: 100%;
  min-width: 150px;
  max-width: 500px;

  .example-full-width {
    width: 100%;
  }
}
`
};
