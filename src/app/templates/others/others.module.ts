import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { OthersMultilevelMenuComponent } from './multi-level-menu/multi-level-menu.component';
import { OthersMultilevelMenuWithIconComponent } from './multi-level-menu-with-icon/multi-level-menu-with-icon.component';
import { OthersNormalRouteComponent } from './normal-route/normal-route.component';
import { OthersRouteWithParamsComponent } from './route-with-params/route-with-params.component';

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild([
      { path: 'multi-level/level-2/level-3/level-4/level-5', component: OthersMultilevelMenuComponent },
      { path: 'multi-level-with-icon/level-2/level-3/level-4/level-5', component: OthersMultilevelMenuWithIconComponent },
      { path: 'normal-route', component: OthersNormalRouteComponent },
      { path: 'route-with-params/:id/:isCute', component: OthersRouteWithParamsComponent },
      { path: 'route-with-params', component: OthersRouteWithParamsComponent }
    ])
  ],
  declarations: [
    OthersMultilevelMenuComponent,
    OthersMultilevelMenuWithIconComponent,
    OthersNormalRouteComponent,
    OthersRouteWithParamsComponent
  ]
})
export class OthersModule {	}
