import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Toolbar Components
import { ToolbarComponent } from './toolbar.component';

// Toolbar Examples
import { SimpleToolbarExample } from './examples/simple-toolbar-example/simple-toolbar-example';

@NgModule({
  declarations: [
    // Toolbar Components
    ToolbarComponent,

    // Examples
    SimpleToolbarExample
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
