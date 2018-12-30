import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: './autocomplete-overview-example.html',
  styleUrls: ['./autocomplete-overview-example.scss']
})
export class AutocompleteOverviewExample {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
