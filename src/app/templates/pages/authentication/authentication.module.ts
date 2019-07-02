import { NgModule } from '@angular/core';

// Routing Module
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Material Modules
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';

// Other Modules
import { PureSharedModule } from '../../../shared/shared.module';
import { PureDirectivesModule } from 'src/app/core/pure-directives/pure-directives.module';

// Shared Layouts
import { AuthCenterLayoutComponent } from './shared/layouts/center-layout/center-layout.component';
import { AuthSideLayoutComponent } from './shared/layouts/side-layout/side-layout.component';

// Shared Components
import { AuthLoginComponent } from './shared/components/login/login.component';
import { AuthRegisterComponent } from './shared/components/register/register.component';
import { AuthForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';
import { AuthChangePasswordComponent } from './shared/components/change-password/change-password.component';
import { AuthVerifyComponent } from './shared/components/verify/verify.component';
import { AuthVerifyWithCodeComponent } from './shared/components/verify-with-code/verify-with-code.component';
import { AuthSessionComponent } from './shared/components/session/session.component';
import { AuthSessionExpiredComponent } from './shared/components/session-expired/session-expired.component';

// Auth Components
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

@NgModule({
  declarations: [
    // Shared Layouts
    AuthCenterLayoutComponent,
    AuthSideLayoutComponent,

    // Shared Component
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
    AuthChangePasswordComponent,
    AuthVerifyComponent,
    AuthVerifyWithCodeComponent,
    AuthSessionComponent,
    AuthSessionExpiredComponent,

    // Auth Components
    AuthLoginV1Component,
    AuthLoginV2Component,

    AuthRegisterV1Component,
    AuthRegisterV2Component,

    AuthForgotPasswordV1Component,
    AuthForgotPasswordV2Component,

    AuthChangePasswordV1Component,
    AuthChangePasswordV2Component,

    AuthVerifyV1Component,
    AuthVerifyV2Component,

    AuthVerifyWithCodeV1Component,
    AuthVerifyWithCodeV2Component,

    AuthSessionV1Component,
    AuthSessionV2Component,

    AuthSessionExpiredV1Component,
    AuthSessionExpiredV2Component
  ],
  imports: [
    // Material Modules
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,

    // Routing Module
    AuthenticationRoutingModule,

    // Other Modules
    PureSharedModule,
    PureDirectivesModule
  ]
})
export class AuthenticationModule {}
