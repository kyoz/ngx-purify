import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/templates/shared/shared.module';

// Autocomplete Components
import { AutocompleteComponent } from './autocomplete.component';

// Autocomplete Examples
import { SimpleAutocompleteExample } from './simple-autocomplete-example/simple-autocomplete-example';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Autocomplete Components
    AutocompleteComponent,

    // Examples
    SimpleAutocompleteExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: AutocompleteComponent }
    ])
  ]
})
export class AutocompleteModule {}
