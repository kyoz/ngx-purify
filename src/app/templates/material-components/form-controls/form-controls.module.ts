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
      // { path: 'datepicker', component: DatepickerComponent },
      // { path: 'form-field', component: FormFieldComponent },
      // { path: 'input', component: InputComponent },
      // { path: 'radio-button', component: RadioButtonComponent },
      // { path: 'select', component: SelectComponent },
      // { path: 'slide-toggle', component: SlideToggleComponent },
      // { path: 'slider', component: SliderComponent }
    ])
  ]
})
export class FormControlsModule {}
