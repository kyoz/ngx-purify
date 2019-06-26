import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AuthLoginV1Component } from './version-1/login-v1.component';
import { AuthLoginV2Component } from './version-2/login-v2.component';

import { AuthRegisterV1Component } from './version-1/register-v1.component';
import { AuthRegisterV2Component } from './version-2/register-v2.component';

import { AuthForgotPasswordV1Component } from './version-1/forgot-password-v1.component';
import { AuthForgotPasswordV2Component } from './version-2/forgot-password-v2.component';

import { AuthChangePasswordV1Component } from './version-1/change-password-v1.component';
import { AuthChangePasswordV2Component } from './version-2/change-password-v2.component';

import { AuthVerifyV1Component } from './version-1/verify-v1.component';
import { AuthVerifyV2Component } from './version-2/verify-v2.component';

import { AuthVerifyWithCodeV1Component } from './version-1/verify-with-code-v1.component';
import { AuthVerifyWithCodeV2Component } from './version-2/verify-with-code-v2.component';

import { AuthSessionV1Component } from './version-1/session-v1.component';
import { AuthSessionV2Component } from './version-2/session-v2.component';

import { AuthSessionExpiredV1Component } from './version-1/session-expired-v1.component';
import { AuthSessionExpiredV2Component } from './version-2/session-expired-v2.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginV1Component },
  { path: 'login-v2', component: AuthLoginV2Component },
  { path: 'register', component: AuthRegisterV1Component },
  { path: 'register-v2', component: AuthRegisterV2Component },
  { path: 'forgot-password', component: AuthForgotPasswordV1Component },
  { path: 'forgot-password-v2', component: AuthForgotPasswordV2Component },
  { path: 'change-password', component: AuthChangePasswordV1Component },
  { path: 'change-password-v2', component: AuthChangePasswordV2Component },
  { path: 'verify', component: AuthVerifyV1Component },
  { path: 'verify-v2', component: AuthVerifyV2Component },
  { path: 'verify-with-code', component: AuthVerifyWithCodeV1Component },
  { path: 'verify-with-code-v2', component: AuthVerifyWithCodeV2Component },
  { path: 'session', component: AuthSessionV1Component },
  { path: 'session-v2', component: AuthSessionV2Component },
  { path: 'session-expired', component: AuthSessionExpiredV1Component },
  { path: 'session-expired-v2', component: AuthSessionExpiredV2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}

