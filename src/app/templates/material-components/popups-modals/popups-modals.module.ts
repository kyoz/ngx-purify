import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { BottomSheetModule } from './bottom-sheet/bottom-sheet.module';
import { DialogModule } from './dialog/dialog.module';
import { SnackbarModule } from './snackbar/snackbar.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

// Components

@NgModule({
  imports: [
    BottomSheetModule,
    DialogModule,
    SnackbarModule,
    TooltipModule,

    RouterModule.forChild([
      { path: 'bottom-sheet', component: BottomSheetComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'snackbar', component: SnackbarComponent },
      { path: 'tooltip', component: TooltipComponent }
    ])
  ]
})
export class PopupsModalsModule {}
