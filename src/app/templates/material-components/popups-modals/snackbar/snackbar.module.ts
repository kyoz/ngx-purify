import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Snackbar Components
import { SnackbarComponent } from './snackbar.component';

// Snackbar Examples
import {
  SnackbarOverviewExample } from './examples/snackbar-overview-example/snackbar-overview-example';

@NgModule({
  declarations: [
    // Snackbar Components
    SnackbarComponent,

    // Examples
    SnackbarOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SnackbarComponent }
    ])
  ]
})
export class SnackbarModule {}
