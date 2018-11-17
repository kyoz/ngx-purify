import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild([
      { path: 'analytical', component: AnalyticalDashboard },
      { path: 'operational', component: OperationalDashboard },
      { path: 'strategic', component: StrategicDashboard },
      { path: '', redirectTo: 'analytical', pathMatch: 'full'},
      { path: '**', redirectTo: 'analytical', pathMatch: 'full'}
    ])
  ]
})
export class DashboardModule {}