import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { CardModule } from './card/card.module';
import { DividerModule } from './divider/divider.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { GridListModule } from './grid-list/grid-list.module';
import { ListModule } from './list/list.module';
import { StepperModule } from './stepper/stepper.module';
import { TabModule } from './tab/tab.module';
import { TreeModule } from './tree/tree.module';

// Components
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    CardModule,
    DividerModule,
    ExpansionPanelModule,
    GridListModule,
    ListModule,
    StepperModule,
    TabModule,
    TreeModule,

    RouterModule.forChild([
      { path: 'card', component: CardComponent },
      { path: 'divider', component: DividerComponent },
      { path: 'expansion-panel', component: ExpansionPanelComponent },
      { path: 'grid-list', component: GridListComponent },
      { path: 'list', component: ListComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'tab', component: TabComponent },
      { path: 'tree', component: TreeComponent }
    ])
  ]
})
export class LayoutModule {}
