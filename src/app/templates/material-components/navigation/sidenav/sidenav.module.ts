import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Sidenav Components
import { SidenavComponent } from './sidenav.component';

// Sidenav Examples
import { SimpleSidenavExample } from './examples/simple-sidenav-example/simple-sidenav-example';
import { AutosizeSidenavExample } from './examples/autosize-sidenav-example/autosize-sidenav-example';

@NgModule({
  declarations: [
    // Sidenav Components
    SidenavComponent,

    // Examples
    SimpleSidenavExample,
    AutosizeSidenavExample
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
