import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'card', loadChildren: './card/card.module#CardModule' },
      { path: 'divider', loadChildren: './divider/divider.module#DividerModule' },
      { path: 'expansion-panel', loadChildren: './expansion-panel/expansion-panel.module#ExpansionPanelModule' },
      { path: 'grid-list', loadChildren: './grid-list/grid-list.module#GridListModule' },
      { path: 'list', loadChildren: './list/list.module#ListModule' },
      { path: 'stepper', loadChildren: './stepper/stepper.module#StepperModule' },
      { path: 'tab', loadChildren: './tab/tab.module#TabModule' },
      { path: 'tree', component: TreeComponent}
    ])
  ]
})
export class LayoutModule {}
