export const html = `
<form>
  <h4>mat-select</h4>
  <mat-form-field>
    <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">
      <mat-option *ngFor="let food of foods" [value]="food.value">
        {{food.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  <p> Selected food: {{selectedValue}} </p>
  <h4>native html select</h4>
  <mat-form-field>
    <select matNativeControl placeholder="Favorite car" [(ngModel)]="selectedCar" name="car">
      <option value="" selected></option>
      <option *ngFor="let car of cars" [value]="car.value">
        {{car.viewValue}}
      </option>
    </select>
  </mat-form-field>
  <p> Selected car: {{selectedCar}} </p>
</form>
`;

export const ts = `
import { Component } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-in-a-form',
  templateUrl: './select-in-a-form.html',
  styleUrls: ['./select-in-a-form.scss']
})
export class SelectInAFormExample {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
}
`;

export const scss = `
h4 {
  padding: 16px 0;
}
`;
