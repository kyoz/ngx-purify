import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

// Will remove soon
import { SelectComponent } from './select/select.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    SelectComponent,
    SlideToggleComponent,
    SliderComponent
  ],
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
      { path: 'select', component: SelectComponent },
      { path: 'slide-toggle', component: SlideToggleComponent },
      { path: 'slider', component: SliderComponent }
    ])
  ]
})
export class FormControlsModule {}
