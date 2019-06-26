import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ErrorsRoutingModule } from './errors.routing';

// Components
import { Error404Component } from './404/404.component';


@NgModule({
  imports: [
    SharedModule,
    ErrorsRoutingModule,
  ],
  declarations: [
    Error404Component
  ]
})
export class ErrorsModule {	}
