import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Divider Components
import { DividerComponent } from './divider.component';

// Divider Examples
import { SimpleDividerExample } from './examples/simple-divider-example/simple-divider-example';

@NgModule({
  declarations: [
    // Divider Components
    DividerComponent,

    // Examples
    SimpleDividerExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: DividerComponent }
    ])
  ]
})
export class DividerModule {}