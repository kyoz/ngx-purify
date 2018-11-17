import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    BottomSheetComponent,
    DialogComponent,
    SnackbarComponent,
    TooltipComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'bottom-sheet', component: BottomSheetComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'snackbar', component: SnackbarComponent },
      { path: 'tooltip', component: TooltipComponent }
    ])
  ]
})
export class PopupsModalsModule {}