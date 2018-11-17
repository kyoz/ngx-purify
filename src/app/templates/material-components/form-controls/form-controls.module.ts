import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialSharedModule } from '../material-shared/material-shared.module';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SlideToggleComponent,
    SliderComponent
  ],
  imports: [
    // Modules
    MaterialSharedModule,

    // Router
    RouterModule.forChild([
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'datepicker', component: DatepickerComponent },
      { path: 'form-field', component: FormFieldComponent },
      { path: 'input', component: InputComponent },
      { path: 'radio-button', component: RadioButtonComponent },
      { path: 'select', component: SelectComponent },
      { path: 'slide-toggle', component: SlideToggleComponent },
      { path: 'slider', component: SliderComponent }
    ])
  ]
})
export class FormControlsModule {}