import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AuthLoginV1Component } from './login/login-v1/login-v1.component';
import { AuthRegisterV1Component } from './register/register-v1/register-v1.component';
import { AuthForgotPasswordV1Component } from './forgot-password/forgot-password-v1/forgot-password-v1.component';
import { AuthChangePasswordV1Component } from './change-password/change-password-v1/change-password-v1.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginV1Component },
  { path: 'register', component: AuthRegisterV1Component },
  { path: 'forgot-password', component: AuthForgotPasswordV1Component },
  { path: 'change-password', component: AuthChangePasswordV1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
