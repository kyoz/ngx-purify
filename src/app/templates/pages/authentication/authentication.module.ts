import { NgModule } from '@angular/core';

// Routing Module
import { AuthenticationRoutingModule } from './authentication.routing';

// Components
import { LoginComponent } from './login/login.component';

// Material Modules
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule
} from '@angular/material';

// Other Modules
import { PureSharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // Material Modules
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,

    // Routing Module
    AuthenticationRoutingModule,

    // Other Modules
    PureSharedModule
  ]
})
export class AuthenticationModule {}
