import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AnnoucementRoutingModule } from './announcement-routing.module';

// Components
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  imports: [
    SharedModule,
    AnnoucementRoutingModule
  ],
  declarations: [
    MaintenanceComponent,
    ComingSoonComponent
  ]
})
export class AnnoucementModule {	}
