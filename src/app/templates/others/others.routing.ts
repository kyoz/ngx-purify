import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { OthersMultilevelMenuComponent } from './multi-level-menu/multi-level-menu.component';
import { OthersMultilevelMenuWithIconComponent } from './multi-level-menu-with-icon/multi-level-menu-with-icon.component';
import { OthersNormalRouteComponent } from './normal-route/normal-route.component';
import { OthersRouteWithParamsComponent } from './route-with-params/route-with-params.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'multi-level/level-5', component: OthersMultilevelMenuComponent },
      { path: 'multi-level/level-5-with-icon', component: OthersMultilevelMenuWithIconComponent },
      { path: 'normal-route', component: OthersNormalRouteComponent },
      { path: 'route-with-params/:id/:isCute', component: OthersRouteWithParamsComponent },
      { path: 'route-with-params', component: OthersRouteWithParamsComponent }
    ])
  ]
})
export class OthersRoutingModule { }
