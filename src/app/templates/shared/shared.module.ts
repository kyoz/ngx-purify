import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { PureDirectivesModule } from '../../core/pure-directives/pure-directives.module';

// Material Modules
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

// Components
import { PageHeaderComponent } from './page-header/page-header.component';
import { MaterialExampleComponent } from './material-example/material-example.component';

// Highlightjs
import { HighlightModule } from 'ngx-highlightjs';

const MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
];

@NgModule({
  imports: [
    // Angular Module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Useful modules
    FlexLayoutModule,
    PureDirectivesModule,

    // Highlightjs
    HighlightModule,

    // Material Modules
    ...MATERIAL_MODULES
  ],
  declarations: [
    // Components
    PageHeaderComponent,
    MaterialExampleComponent
  ],
  exports: [
    // Angular Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Useful modules
    FlexLayoutModule,
    PureDirectivesModule,

    // Material Modules
    ...MATERIAL_MODULES,

    // Components
    PageHeaderComponent,
    MaterialExampleComponent
  ]
})
export class SharedModule {}
