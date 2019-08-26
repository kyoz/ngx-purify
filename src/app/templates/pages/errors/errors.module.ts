import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ErrorsRoutingModule } from './errors-routing.module';

// Components
import { Error404Component } from './404/404.component';
import { Error408Component } from './408/408.component';
import { Error500Component } from './500/500.component';

@NgModule({
  imports: [
    SharedModule,
    ErrorsRoutingModule
  ],
  declarations: [
    Error404Component,
    Error408Component,
    Error500Component
  ]
})
export class ErrorsModule {	}
