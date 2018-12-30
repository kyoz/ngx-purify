import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Ripples Components
import { RipplesComponent } from './ripples.component';

// Ripples Examples
import { RipplesOverviewExample } from './examples/ripples-overview-example/ripples-overview-example';

@NgModule({
  declarations: [
    // Ripples Components
    RipplesComponent,

    // Examples
    RipplesOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: RipplesComponent }
    ])
  ]
})
export class RipplesModule {}
