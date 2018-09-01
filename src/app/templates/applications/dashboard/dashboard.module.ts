import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard.routing';

import { AnalyticalDashboard } from './analytical-dashboard/analytical-dashboard.component';
import { OperationalDashboard } from './operational-dashboard/operational-dashboard.component';
import { StrategicDashboard } from './strategic-dashboard/strategic-dashboard.component';

@NgModule({
  declarations: [
    AnalyticalDashboard,
    OperationalDashboard,
    StrategicDashboard
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule {}