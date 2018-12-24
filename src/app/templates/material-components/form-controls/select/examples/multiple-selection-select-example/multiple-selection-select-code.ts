export const html = `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'multiple-selection-select-example',
  templateUrl: './multiple-selection-select-example.html',
  styleUrls: ['./multiple-selection-select-example.scss']
})
export class MultipleSelectionSelectExample {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
`;

export const scss = `
/** No CSS for this example */
`;
