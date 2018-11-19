import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

const routes: Routes = [
  { 
    path: '', component: MainContainer, children: [
      { path: 'app', loadChildren: './templates/applications/applications.module#ApplicationsModule' },
      { path: 'material-components', loadChildren: './templates/material-components/material-components.module#MaterialComponentsModule' },
    ]
  },
  { path: 'page', component: MinimalContainer, loadChildren: './templates/pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
