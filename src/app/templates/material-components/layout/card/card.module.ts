import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Card Components
import { CardComponent } from './card.component';

// Card Examples
import { CardOverviewExample } from './examples/card-overview-example/card-overview-example';

const COMPONENTS = [
  // Card Components
  CardComponent,

  // Examples
  CardOverviewExample
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
export class CardModule {}
