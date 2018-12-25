import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    // Modules
    SharedModule,

    // Router
    RouterModule.forChild([
      { path: 'autocomplete', loadChildren: './autocomplete/autocomplete.module#AutocompleteModule' },
      { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxModule' },
      { path: 'datepicker', loadChildren: './datepicker/datepicker.module#DatePickerModule' },
      { path: 'form-field', loadChildren: './form-field/form-field.module#FormFieldModule' },
      { path: 'input', loadChildren: './input/input.module#InputModule' },
      { path: 'radio-button', loadChildren: './radio-button/radio-button.module#RadioButtonModule' },
      { path: 'select', loadChildren: './select/select.module#SelectModule' },
      { path: 'slider', loadChildren: './slider/slider.module#SliderModule' },
      { path: 'slide-toggle', loadChildren: './slide-toggle/slide-toggle.module#SlideToggleModule' }
    ])
  ]
})
export class FormControlsModule {}
