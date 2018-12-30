import { Component } from '@angular/core';

import * as DATEPICKER_OVERVIEW_CODE from './examples/datepicker-overview-example/datepicker-overview-code';
import * as DATEPICKER_TOUCH_UI_CODE from './examples/datepicker-touch-ui-example/datepicker-touch-ui-code';
import * as DATEPICKER_OPEN_METHOD_CODE from './examples/datepicker-open-method-example/datepicker-open-method-code';
import * as DATEPICKER_DISABLED_CODE from './examples/datepicker-disabled-example/datepicker-disabled-code';

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  datepickerOverviewCode = DATEPICKER_OVERVIEW_CODE;
  datepickerTouchUICode = DATEPICKER_TOUCH_UI_CODE;
  datepickerOpenMethodCode = DATEPICKER_OPEN_METHOD_CODE;
  datepickerDisabledCode = DATEPICKER_DISABLED_CODE;
}
