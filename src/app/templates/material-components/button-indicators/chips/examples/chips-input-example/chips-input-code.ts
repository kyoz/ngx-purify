export const html = `
<mat-form-field class="example-chip-list">
  <mat-chip-list #chipList>
    <mat-chip *ngFor="let fruit of fruits" [selectable]="selectable"
             [removable]="removable" (removed)="remove(fruit)">
      {{fruit.name}}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>
    <input placeholder="New fruit..."
           [matChipInputFor]="chipList"
           [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
           [matChipInputAddOnBlur]="addOnBlur"
           (matChipInputTokenEnd)="add($event)">
  </mat-chip-list>
</mat-form-field>
`;

export const ts = `
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'chips-input-example',
  templateUrl: './chips-input-example.html',
  styleUrls: ['./chips-input-example.scss']
})
export class ChipsInputExample {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
`;

export const scss = `
.example-chip-list {
  width: 100%;
}
`;
