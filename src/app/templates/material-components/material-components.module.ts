import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // Router
    RouterModule.forChild([
      {
        path: 'form-controls',
        loadChildren: () => import('./form-controls/form-controls.module').then(module => module.FormControlsModule)
      },
      {
        path: 'navigation',
        loadChildren: () => import('./navigation/navigation.module').then(module => module.NavigationModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'button-indicators',
        loadChildren: () => import('./button-indicators/button-indicators.module').then(module => module.ButtonIndicatorsModule)
      },
      {
        path: 'popups-modals',
        loadChildren: () => import('./popups-modals/popups-modals.module').then(module => module.PopupsModalsModule)
      },
      {
        path: 'datatable',
        loadChildren: () => import('./datatable/datatable.module').then(module => module.DatatableModule)
      }
    ])
  ]
})
export class MaterialComponentsModule {}
