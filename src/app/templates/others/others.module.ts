import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OthersRoutingModule } from './others.routing';

// Components
import { OthersMultilevelMenuComponent } from './multi-level-menu/multi-level-menu.component';
import { OthersMultilevelMenuWithIconComponent } from './multi-level-menu-with-icon/multi-level-menu-with-icon.component';
import { OthersNormalRouteComponent } from './normal-route/normal-route.component';
import { OthersRouteWithParamsComponent } from './route-with-params/route-with-params.component';

@NgModule({
  imports: [
    SharedModule,
    OthersRoutingModule
  ],
  declarations: [
    OthersMultilevelMenuComponent,
    OthersMultilevelMenuWithIconComponent,
    OthersNormalRouteComponent,
    OthersRouteWithParamsComponent
  ]
})
export class OthersModule {	}
