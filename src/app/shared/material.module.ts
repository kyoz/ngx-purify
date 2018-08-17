import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatOptionModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Angular Material Modules
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
})
export class MaterialModule { }