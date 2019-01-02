import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DatePickerModule } from './datepicker/datepicker.module';
import { FormFieldModule } from './form-field/form-field.module';
import { InputModule } from './input/input.module';
import { RadioButtonModule } from './radio-button/radio-button.module';
import { SelectModule } from './select/select.module';
import { SliderModule } from './slider/slider.module';
import { SlideToggleModule } from './slide-toggle/slide-toggle.module';

// Components
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

@NgModule({
  imports: [
    AutocompleteModule,
    CheckboxModule,
    DatePickerModule,
    FormFieldModule,
    InputModule,
    RadioButtonModule,
    SelectModule,
    SliderModule,
    SlideToggleModule,

    // Router
    RouterModule.forChild([
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'datepicker', component: DatepickerComponent },
      { path: 'form-field', component: FormFieldComponent },
      { path: 'input', component: InputComponent },
      { path: 'radio-button', component: RadioButtonComponent },
      { path: 'select', component: SelectComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'slide-toggle', component: SlideToggleComponent }
    ])
  ]
})
export class FormControlsModule {}
