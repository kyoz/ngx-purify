export const html = `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-select-trigger>
      {{toppings.value ? toppings.value[0] : ''}}
      <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">
        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
      </span>
    </mat-select-trigger>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>
`;

export const ts = `
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
`;

export const scss = `
.example-additional-selection {
  opacity: 0.75;
  font-size: 0.75em;
}
`;
