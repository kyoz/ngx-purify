export const html = `
<mat-form-field class="example-chip-list">
  <mat-chip-list #chipList>
    <mat-chip
      *ngFor="let fruit of fruits"
      [selectable]="selectable"
      [removable]="removable"
      (removed)="remove(fruit)">
      {{fruit}}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>
    <input
      placeholder="New fruit..."
      #fruitInput
      [formControl]="fruitCtrl"
      [matAutocomplete]="auto"
      [matChipInputFor]="chipList"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      [matChipInputAddOnBlur]="addOnBlur"
      (matChipInputTokenEnd)="add($event)">
  </mat-chip-list>
  <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
    <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
      {{fruit}}
    </mat-option>
  </mat-autocomplete>
</mat-form-field>
`;

export const ts = `
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'chips-autocomplete-example',
  templateUrl: './chips-autocomplete-example.html',
  styleUrls: ['./chips-autocomplete-example.scss']
})
export class ChipsAutocompleteExample {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
`;

export const scss = `
.example-chip-list {
  width: 100%;
}
`;
