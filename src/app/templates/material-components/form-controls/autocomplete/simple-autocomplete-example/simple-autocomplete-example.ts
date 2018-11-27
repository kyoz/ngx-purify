import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'simple-autocomplete-example',
  templateUrl: './simple-autocomplete-example.html',
  styleUrls: ['./simple-autocomplete-example.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleAutocompleteExample {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
