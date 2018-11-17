import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  // Form Controls
  MatAutocompleteModule,
  MatCheckboxModule,

  // Navigation
  MatToolbarModule,

  // Layout
  MatIconModule,

  // Buttons & Indicators
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    // Form Controls
    MatAutocompleteModule,
    MatCheckboxModule,

    // Navigation
    MatToolbarModule,

    // Layout
    MatIconModule,

    // Buttons & Indicators
    MatButtonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class MaterialSharedModule {}