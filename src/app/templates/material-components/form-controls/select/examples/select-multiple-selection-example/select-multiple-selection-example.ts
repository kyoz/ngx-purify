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
