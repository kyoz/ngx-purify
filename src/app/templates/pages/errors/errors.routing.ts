import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { Error404Component } from './404/404.component';

const routes: Routes = [
  { path: 'error-404', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}

