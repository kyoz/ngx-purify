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
