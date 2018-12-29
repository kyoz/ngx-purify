import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Toolbar Components
import { ToolbarComponent } from './toolbar.component';

// Toolbar Examples
import { ToolbarOverviewExample } from './examples/toolbar-overview-example/toolbar-overview-example';

@NgModule({
  declarations: [
    // Toolbar Components
    ToolbarComponent,

    // Examples
    ToolbarOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ToolbarComponent }
    ])
  ]
})
export class ToolbarModule {}
