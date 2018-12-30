import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Card Components
import { CardComponent } from './card.component';

// Card Examples
import { CardOverviewExample } from './examples/card-overview-example/card-overview-example';

@NgModule({
  declarations: [
    // Card Components
    CardComponent,

    // Examples
    CardOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: CardComponent }
    ])
  ]
})
export class CardModule {}
