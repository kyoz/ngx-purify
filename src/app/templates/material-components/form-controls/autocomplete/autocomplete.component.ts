import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Examples Code
import { SIMPLE_AUTOCOMPLETE_CODE } from './simple-autocomplete-example/simple-autocomplete-code';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit {

  simpleAutoCompleteCode = SIMPLE_AUTOCOMPLETE_CODE;

  constructor() { }

  ngOnInit() {
  }
}
