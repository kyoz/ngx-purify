import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication.routing';
import { LoginComponent } from './login/login.component';
import { PureSharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    PureSharedModule
  ]
})
export class AuthenticationModule {}
