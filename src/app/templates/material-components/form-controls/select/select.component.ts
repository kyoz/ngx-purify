import { Component } from '@angular/core';

import * as SIMPLE_SELECT_CODE from './examples/simple-select-example/simple-select-code';
import * as TWO_WAYS_BINDING_SELECT_CODE from './examples/two-way-binding-select-example/two-way-binding-select-code';
import * as SELECT_IN_A_FORM_CODE from './examples/select-in-a-form/select-in-a-form-code';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  simpleSelectCode = SIMPLE_SELECT_CODE;
  twoWaysBindingSelectCode = TWO_WAYS_BINDING_SELECT_CODE;
  selectInAFormCode = SELECT_IN_A_FORM_CODE;
}
