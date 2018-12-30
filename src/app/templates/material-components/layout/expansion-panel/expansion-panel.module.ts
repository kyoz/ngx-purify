import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Expansion Panel Components
import { ExpansionPanelComponent } from './expansion-panel.component';

// Expansion Panel Examples
import { ExpansionOverviewExample } from './examples/expansion-overview-example/expansion-overview-example';
import { ExpansionAccordionExample } from './examples/expansion-accordion-example/expansion-accordion-example';

@NgModule({
  declarations: [
    // Expansion Panel Components
    ExpansionPanelComponent,

    // Examples
    ExpansionOverviewExample,
    ExpansionAccordionExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ExpansionPanelComponent}
    ])
  ]
})
export class ExpansionPanelModule {}
