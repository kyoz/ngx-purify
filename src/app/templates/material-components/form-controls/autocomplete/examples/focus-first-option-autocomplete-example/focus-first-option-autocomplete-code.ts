export const html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="optionCtrl" [matAutocomplete]="auto">
    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
`;

export const ts = `
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'focus-first-option-autocomplete-example',
  templateUrl: './focus-first-option-autocomplete-example.html',
  styleUrls: ['./focus-first-option-autocomplete-example.scss']
})
export class FocusFirstOptionAutocompleteExample implements OnInit {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.optionCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
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
