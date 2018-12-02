import { Component, OnInit } from '@angular/core';

import * as SIMPLE_CHECKBOX_CODE from './examples/simple-checkbox-example/simple-checkbox-code';
import * as CONFIGURATION_CHECKBOX_CODE from './examples/configuration-checkbox-example/configuration-checkbox-code';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  simpleCheckboxCode = SIMPLE_CHECKBOX_CODE;
  configurationCheckboxCode = CONFIGURATION_CHECKBOX_CODE;

  constructor() { }

  ngOnInit() {
  }
}
