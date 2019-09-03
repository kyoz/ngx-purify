import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'announcement',
        loadChildren: () => import('./announcement/announcement.module')
          .then(module => module.AnnoucementModule)
      }
    ])
  ]
})
export class FullscreenPagesModule {}
