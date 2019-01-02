import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Expansion Panel Components
import { ExpansionPanelComponent } from './expansion-panel.component';

// Expansion Panel Examples
import { ExpansionOverviewExample } from './examples/expansion-overview-example/expansion-overview-example';
import { ExpansionAccordionExample } from './examples/expansion-accordion-example/expansion-accordion-example';

const COMPONENTS = [
  // Expansion Panel Components
  ExpansionPanelComponent,

  // Examples
  ExpansionOverviewExample,
  ExpansionAccordionExample
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
export class ExpansionPanelModule {}
