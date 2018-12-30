import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Datepicker Components
import { DatepickerComponent } from './datepicker.component';

// Datepicker Examples
import { DatepickerOverviewExample } from './examples/datepicker-overview-example/datepicker-overview-example';
import { DatepickerTouchUIExample } from './examples/datepicker-touch-ui-example/datepicker-touch-ui-example';
import { DatepickerOpenMethodExample } from './examples/datepicker-open-method-example/datepicker-open-method-example';
import { DatepickerDisabledExample } from './examples/datepicker-disabled-example/datepicker-disabled-example';

@NgModule({
  declarations: [
    // Datepicker Components
    DatepickerComponent,

    // Examples
    DatepickerOverviewExample,
    DatepickerTouchUIExample,
    DatepickerOpenMethodExample,
    DatepickerDisabledExample
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
