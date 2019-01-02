import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/templates/shared/shared.module';

// Toolbar Components
import { ToolbarComponent } from './toolbar.component';

// Toolbar Examples
import { ToolbarOverviewExample } from './examples/toolbar-overview-example/toolbar-overview-example';

const COMPONENTS = [
  // Toolbar Components
  ToolbarComponent,

  // Examples
  ToolbarOverviewExample
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
export class ToolbarModule {}
