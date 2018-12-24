import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-trigger-text-select-example',
  templateUrl: './custom-trigger-text-select-example.html',
  styleUrls: ['./custom-trigger-text-select-example.scss']
})
export class CustomTriggerTextSelectExample {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
