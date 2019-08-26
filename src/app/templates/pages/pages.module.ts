import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'errors',
        loadChildren: () => import('./errors/errors.module')
          .then(module => module.ErrorsModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module')
          .then(module => module.PricingModule)
      }
    ])
  ]
})
export class PagesModule {}
