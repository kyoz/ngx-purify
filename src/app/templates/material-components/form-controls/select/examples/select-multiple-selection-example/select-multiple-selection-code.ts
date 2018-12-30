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
  selector: 'select-multiple-selection-example',
  templateUrl: './select-multiple-selection-example.html',
  styleUrls: ['./select-multiple-selection-example.scss']
})
export class SelectMultipleSelectionExample {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
`;

export const scss = `
/** No CSS for this example */
`;
