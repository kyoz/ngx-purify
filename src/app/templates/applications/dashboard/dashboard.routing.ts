import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnalyticalDashboard } from './analytical-dashboard/analytical-dashboard.component';
import { OperationalDashboard } from './operational-dashboard/operational-dashboard.component';
import { StrategicDashboard } from './strategic-dashboard/strategic-dashboard.component';

const routes: Routes = [
  { path: 'analytical', component: AnalyticalDashboard },
  { path: 'operational', component: OperationalDashboard },
  { path: 'strategic', component: StrategicDashboard },
  { path: '', redirectTo: 'analytical', pathMatch: 'full'},
  { path: '**', redirectTo: 'analytical', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
