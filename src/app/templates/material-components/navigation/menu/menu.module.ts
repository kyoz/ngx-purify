import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Menu Components
import { MenuComponent } from './menu.component';

// Menu Examples
import { SimpleMenuExample } from './examples/simple-menu-example/simple-menu-example';
import { IconMenuExample } from './examples/icon-menu-example/icon-menu-example';
import { NestedMenuExample } from './examples/nested-menu-example/nested-menu-example';

@NgModule({
  declarations: [
    // Menu Components
    MenuComponent,

    // Examples
    SimpleMenuExample,
    IconMenuExample,
    NestedMenuExample
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
