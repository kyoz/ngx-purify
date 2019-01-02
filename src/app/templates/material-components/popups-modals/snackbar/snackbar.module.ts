import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Snackbar Components
import { SnackbarComponent } from './snackbar.component';

// Snackbar Examples
import { SnackbarOverviewExample } from './examples/snackbar-overview-example/snackbar-overview-example';

const COMPONENTS = [
  // Snackbar Components
  SnackbarComponent,

  // Examples
  SnackbarOverviewExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SnackbarModule {}
