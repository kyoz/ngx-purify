import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

const routes: Routes = [
  { path: '', component: MainContainer},
  { path: 'pages', component: MinimalContainer, loadChildren: './templates/pages/pages.module#PagesModule' }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
