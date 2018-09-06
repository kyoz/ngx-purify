import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard.routing';

import { AnalyticalDashboard } from './analytical-dashboard/analytical-dashboard.component';
import { OperationalDashboard } from './operational-dashboard/operational-dashboard.component';
import { StrategicDashboard } from './strategic-dashboard/strategic-dashboard.component';
import { PureSharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    AnalyticalDashboard,
    OperationalDashboard,
    StrategicDashboard
  ],
  imports: [
    DashboardRoutingModule,
    PureSharedModule
  ]
})
export class DashboardModule {}