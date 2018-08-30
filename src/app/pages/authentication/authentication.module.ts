import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
