export const html = `
<h4>mat select</h4>
<mat-form-field>
  <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
    <mat-option>--</mat-option>
    <mat-option *ngFor="let animal of animals" [value]="animal">
      {{animal.name}}
    </mat-option>
  </mat-select>
  <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
  <mat-hint>{{animalControl.value?.sound}}</mat-hint>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <mat-label>Select your car (required)</mat-label>
  <select matNativeControl required [formControl]="selectFormControl">
    <option label="--select something --"></option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <mat-error *ngIf="selectFormControl.hasError('required')">
    This field is required
  </mat-error>
  <mat-hint>You can pick up your favorite car here</mat-hint>
</mat-form-field>
`;

export const ts = `
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'form-field-features-select-example',
  templateUrl: './form-field-features-select-example.html',
  styleUrls: ['./form-field-features-select-example.scss']
})
export class FormFieldFeaturesSelectExample {
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
`;

export const scss = `
h4 {
  padding: 16px 0;
}
`;
