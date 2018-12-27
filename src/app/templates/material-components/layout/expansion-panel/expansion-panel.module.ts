import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Expansion Panel Components
import { ExpansionPanelComponent } from './expansion-panel.component';

// Expansion Panel Examples
import { SimpleExpansionExample } from './examples/simple-expansion-example/simple-expansion-example';
import { AccordionExpansionExample } from './examples/accordion-expansion-example/accordion-expansion-example';

@NgModule({
  declarations: [
    // Expansion Panel Components
    ExpansionPanelComponent,

    // Examples
    SimpleExpansionExample,
    AccordionExpansionExample
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
