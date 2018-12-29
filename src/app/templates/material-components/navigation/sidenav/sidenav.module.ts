import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Sidenav Components
import { SidenavComponent } from './sidenav.component';

// Sidenav Examples
import { SidenavOverviewExample } from './examples/sidenav-overview-example/sidenav-overview-example';
import { SidenavAutosizeExample } from './examples/sidenav-autosize-example/sidenav-autosize-example';

@NgModule({
  declarations: [
    // Sidenav Components
    SidenavComponent,

    // Examples
    SidenavOverviewExample,
    SidenavAutosizeExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SidenavComponent }
    ])
  ]
})
export class SidenavModule {}
