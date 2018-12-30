export const html = `
<h4>Basic mat-select</h4>
<mat-form-field>
  <mat-select placeholder="Favorite food">
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>

<h4>Basic native select</h4>
<mat-form-field>
  <select matNativeControl required>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-overview-example',
  templateUrl: './select-overview-example.html',
  styleUrls: ['./select-overview-example.scss']
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
`;

export const scss = `
h4 {
  padding: 16px 0;
}
`;
