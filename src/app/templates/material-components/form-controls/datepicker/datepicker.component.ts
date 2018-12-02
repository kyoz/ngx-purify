import { Component } from '@angular/core';

import * as SIMPLE_DATEPICKER_CODE from './examples/simple-datepicker-example/simple-datepicker-code';
import * as TOUCH_UI_DATEPICKER_CODE from './examples/touch-ui-datepicker-example/touch-ui-datepicker-code';
import * as OPEN_METHOD_DATEPICKER_CODE from './examples/open-method-datepicker-example/open-method-datepicker-code';
import * as DISABLED_DATEPICKER_CODE from './examples/disabled-datepicker-example/disabled-datepicker-code';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  simpleDatepickerCode = SIMPLE_DATEPICKER_CODE;
  touchUIDatepickerCode = TOUCH_UI_DATEPICKER_CODE;
  openMethodDatepickerCode = OPEN_METHOD_DATEPICKER_CODE;
  disabledDatepickerCode = DISABLED_DATEPICKER_CODE;
}
