import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'announcement',
        loadChildren: () => import('./announcement/announcement.module')
          .then(module => module.AnnoucementModule)
      },
      {
        path: 'errors',
        loadChildren: () => import('./errors/errors.module')
          .then(module => module.ErrorsModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module')
          .then(module => module.PricingModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module')
          .then(module => module.FaqModule)
      }
    ])
  ]
})
export class PagesModule {}
