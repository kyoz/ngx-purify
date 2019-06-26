import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { Error404Component } from './404/404.component';
import { Error408Component } from './408/408.component';
import { Error500Component } from './500/500.component';

const routes: Routes = [
  { path: 'error-404', component: Error404Component },
  { path: 'error-408', component: Error408Component },
  { path: 'error-500', component: Error500Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}

