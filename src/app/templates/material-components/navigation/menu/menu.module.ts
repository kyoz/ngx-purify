import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Menu Components
import { MenuComponent } from './menu.component';

// Menu Examples
import { MenuOverviewExample } from './examples/menu-overview-example/menu-overview-example';
import { MenuIconExample } from './examples/menu-icon-example/menu-icon-example';
import { MenuNestedExample } from './examples/menu-nested-example/menu-nested-example';

@NgModule({
  declarations: [
    // Menu Components
    MenuComponent,

    // Examples
    MenuOverviewExample,
    MenuIconExample,
    MenuNestedExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: MenuComponent }
    ])
  ]
})
export class MenuModule {}
