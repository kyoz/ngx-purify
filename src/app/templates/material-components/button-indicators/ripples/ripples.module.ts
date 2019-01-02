import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Ripples Components
import { RipplesComponent } from './ripples.component';

// Ripples Examples
import { RipplesOverviewExample } from './examples/ripples-overview-example/ripples-overview-example';

const COMPONENTS = [
  // Ripples Components
  RipplesComponent,

  // Examples
  RipplesOverviewExample
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
export class RipplesModule {}
