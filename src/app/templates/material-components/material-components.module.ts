import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [

    // Router
    RouterModule.forChild([
      { path: 'button-indicators', loadChildren: './button-indicators/button-indicators.module#ButtonIndicatorsModule'},
      { path: 'datatable', loadChildren: './datatable/datatable.module#DatatableModule' },
      { path: 'form-controls', loadChildren: './form-controls/form-controls.module#FormControlsModule' },
      { path: 'layout', loadChildren: './layout/layout.module#LayoutModule' },
      { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationModule' },
      { path: 'popups-modals', loadChildren: './popups-modals/popups-modals.module#PopupsModalsModule' }
    ])
  ],
  exports: []
})
export class MaterialComponentsModule {}