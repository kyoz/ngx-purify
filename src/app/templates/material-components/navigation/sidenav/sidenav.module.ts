import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/templates/shared/shared.module';

// Sidenav Components
import { SidenavComponent } from './sidenav.component';

// Sidenav Examples
import { SidenavOverviewExample } from './examples/sidenav-overview-example/sidenav-overview-example';
import { SidenavAutosizeExample } from './examples/sidenav-autosize-example/sidenav-autosize-example';

const COMPONENTS = [
  // Sidenav Components
  SidenavComponent,

  // Examples
  SidenavOverviewExample,
  SidenavAutosizeExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SidenavModule {}
