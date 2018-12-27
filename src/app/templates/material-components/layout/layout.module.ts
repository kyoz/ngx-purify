import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabComponent,
    TreeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'card', loadChildren: './card/card.module#CardModule' },
      { path: 'divider', loadChildren: './divider/divider.module#DividerModule' },
      { path: 'expansion-panel', loadChildren: './expansion-panel/expansion-panel.module#ExpansionPanelModule' },
      { path: 'grid-list', component: GridListComponent },
      { path: 'list', component: ListComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'tab', component: TabComponent },
      { path: 'tree', component: TreeComponent}
    ])
  ]
})
export class LayoutModule {}
