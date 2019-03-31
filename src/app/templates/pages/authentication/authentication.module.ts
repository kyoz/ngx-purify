import { NgModule } from '@angular/core';

// Routing Module
import { AuthenticationRoutingModule } from './authentication.routing';

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

// Auth Components
import { AuthLoginV1Component } from './v1/login-v1/login-v1.component';
import { AuthRegisterV1Component } from './v1/register-v1/register-v1.component';
import { AuthForgotPasswordV1Component } from './v1/forgot-password-v1/forgot-password-v1.component';
import { AuthChangePasswordV1Component } from './v1/change-password-v1/change-password-v1.component';
import { AuthVerifyV1Component } from './v1/verify-v1/verify-v1.component';

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

    // Auth Components
    AuthLoginV1Component,
    AuthRegisterV1Component,
    AuthForgotPasswordV1Component,
    AuthChangePasswordV1Component,
    AuthVerifyV1Component
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
