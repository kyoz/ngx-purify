import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-custom-trigger-text-example',
  templateUrl: './select-custom-trigger-text-example.html',
  styleUrls: ['./select-custom-trigger-text-example.scss']
})
export class SelectCustomTriggerTextExample {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
