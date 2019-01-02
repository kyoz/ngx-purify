import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Tree Components
import { TreeComponent } from './tree.component';

// Tree Examples
import { TreeDynamicExample } from './examples/tree-dynamic-example/tree-dynamic-example';
import { TreeFlatExample } from './examples/tree-flat-example/tree-flat-example';
import { TreeChecklistExample } from './examples/tree-checklist-example/tree-checklist-example';
import { TreeNestedExample } from './examples/tree-nested-example/tree-nested-example';
import { TreeLoadmoreExample } from './examples/tree-loadmore-example/tree-loadmore-example';

const COMPONENTS = [
  // Tree Components
  TreeComponent,

  // Examples
  TreeDynamicExample,
  TreeFlatExample,
  TreeChecklistExample,
  TreeNestedExample,
  TreeLoadmoreExample
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
export class TreeModule {}
