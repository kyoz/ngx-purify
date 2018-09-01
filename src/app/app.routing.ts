import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/dashboard/analytical', pathMatch: 'full' },
  { path: 'app', component: MainContainer, loadChildren: './templates/applications/applications.module#ApplicationsModule' },
  { path: 'page', component: MinimalContainer, loadChildren: './templates/pages/pages.module#PagesModule' }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
