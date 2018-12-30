import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'select-form-field-features-example',
  templateUrl: './select-form-field-features-example.html',
  styleUrls: ['./select-form-field-features-example.scss']
})
export class SelectFormFieldFeaturesExample {
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
