import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/templates/shared/shared.module';

// Menu Components
import { MenuComponent } from './menu.component';

// Menu Examples
import { MenuOverviewExample } from './examples/menu-overview-example/menu-overview-example';
import { MenuIconExample } from './examples/menu-icon-example/menu-icon-example';
import { MenuNestedExample } from './examples/menu-nested-example/menu-nested-example';

const COMPONENTS = [
  // Menu Components
  MenuComponent,

  // Examples
  MenuOverviewExample,
  MenuIconExample,
  MenuNestedExample
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
export class MenuModule {}
