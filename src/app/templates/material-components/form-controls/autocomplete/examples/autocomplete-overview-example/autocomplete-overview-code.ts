export const html = `
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
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: './autocomplete-overview-example.html',
  styleUrls: ['./autocomplete-overview-example.scss']
})
export class AutocompleteOverviewExample {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
`;

export const scss = `
.example-form {
  width: 100%;
  min-width: 150px;
  max-width: 500px;

  .example-full-width {
    width: 100%;
  }
}
`;
