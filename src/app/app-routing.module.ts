import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainContainer,
    loadChildren: () => import('./templates/applications/applications.module')
      .then(module => module.ApplicationsModule)
  },
  {
    path: 'material-components',
    component: MainContainer,
    loadChildren: () => import('./templates/material-components/material-components.module')
      .then(module => module.MaterialComponentsModule)
  },
  {
    path: 'pages/errors',
    component: MainContainer,
    loadChildren: () => import('./templates/pages/errors/errors.module')
      .then(module => module.ErrorsModule)
  },
  {
    path: 'pages/pricing',
    component: MainContainer,
    loadChildren: () => import('./templates/pages/pricing/pricing.module')
      .then(module => module.PricingModule)
  },
  {
    path: 'pages',
    component: MinimalContainer,
    loadChildren: () => import('./templates/pages/pages.module')
      .then(module => module.PagesModule)
  },
  {
    path: 'others',
    component: MainContainer,
    loadChildren: () => import('./templates/others/others.module')
      .then(module => module.OthersModule)
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
