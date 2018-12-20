import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Datepicker Components
import { DatepickerComponent } from './datepicker.component';

// Datepicker Examples
import { SimpleDatepickerExample } from './examples/simple-datepicker-example/simple-datepicker-example';
import { TouchUIDatepickerExample } from './examples/touch-ui-datepicker-example/touch-ui-datepicker-example';
import { OpenMethodDatepickerExample } from './examples/open-method-datepicker-example/open-method-datepicker-example';
import { DisabledDatepickerExample } from './examples/disabled-datepicker-example/disabled-datepicker-example';

@NgModule({
  declarations: [
    // Datepicker Components
    DatepickerComponent,

    // Examples
    SimpleDatepickerExample,
    TouchUIDatepickerExample,
    OpenMethodDatepickerExample,
    DisabledDatepickerExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: DatepickerComponent }
    ])
  ]
})
export class DatePickerModule {}
