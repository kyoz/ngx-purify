import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthLoginV1Component } from './login/login-v1/login-v1.component';
import { AuthRegisterV1Component } from './register/register-v1/register-v1.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginV1Component },
  { path: 'register', component: AuthRegisterV1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
