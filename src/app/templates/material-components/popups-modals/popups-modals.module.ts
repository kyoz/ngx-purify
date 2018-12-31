import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bottom-sheet', loadChildren: './bottom-sheet/bottom-sheet.module#BottomSheetModule' },
      { path: 'dialog', loadChildren: './dialog/dialog.module#DialogModule' },
      { path: 'snackbar', loadChildren: './snackbar/snackbar.module#SnackbarModule' },
      { path: 'tooltip', loadChildren: './tooltip/tooltip.module#TooltipModule' }
    ])
  ]
})
export class PopupsModalsModule {}
