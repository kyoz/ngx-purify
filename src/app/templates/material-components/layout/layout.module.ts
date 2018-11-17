import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabComponent,
    TreeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'card', component: CardComponent },
      { path: 'divider', component: DividerComponent },
      { path: 'expansion-panel', component: ExpansionPanelComponent },
      { path: 'grid-list', component: GridListComponent },
      { path: 'list', component: ListComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'tab', component: TabComponent },
      { path: 'tree', component: TreeComponent}
    ])
  ]
})
export class LayoutModule {}