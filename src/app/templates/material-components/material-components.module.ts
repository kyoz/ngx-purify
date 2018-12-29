import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // Router
    RouterModule.forChild([
      { path: 'form-controls', loadChildren: './form-controls/form-controls.module#FormControlsModule' },
      { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationModule' },
      { path: 'layout', loadChildren: './layout/layout.module#LayoutModule' },
      { path: 'button-indicators', loadChildren: './button-indicators/button-indicators.module#ButtonIndicatorsModule' },
      // { path: 'popups-modals', loadChildren: './popups-modals/popups-modals.module#PopupsModalsModule' },
      // { path: 'datatable', loadChildren: './datatable/datatable.module#DatatableModule' }
    ])
  ],
  exports: []
})
export class MaterialComponentsModule {}
