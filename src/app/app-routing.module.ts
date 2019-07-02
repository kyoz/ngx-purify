import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

const routes: Routes = [
  { path: 'app', component: MainContainer, loadChildren: './templates/applications/applications.module#ApplicationsModule' },
  {
    path: 'material-components',
    component: MainContainer,
    loadChildren: './templates/material-components/material-components.module#MaterialComponentsModule'
  },
  { path: 'pages/errors', component: MainContainer, loadChildren: './templates/pages/errors/errors.module#ErrorsModule' },
  { path: 'pages', component: MinimalContainer, loadChildren: './templates/pages/pages.module#PagesModule' },
  { path: 'others', component: MainContainer, loadChildren: './templates/others/others.module#OthersModule' },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
