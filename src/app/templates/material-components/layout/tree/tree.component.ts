import { Component } from '@angular/core';

import * as TREE_DYNAMIC_CODE from './examples/tree-dynamic-example/tree-dynamic-code';
import * as TREE_FLAT_CODE from './examples/tree-flat-example/tree-flat-code';
import * as TREE_CHECKBOX_CODE from './examples/tree-checklist-example/tree-checklist-code';
import * as TREE_NESTED_CODE from './examples/tree-nested-example/tree-nested-code';
import * as TREE_LOADMORE_CODE from './examples/tree-loadmore-example/tree-loadmore-code';

@Component({
  selector: 'app-material-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  treeDynamicCode = TREE_DYNAMIC_CODE;
  treeFlatCode = TREE_FLAT_CODE;
  treeCheckboxCode = TREE_CHECKBOX_CODE;
  treeNestedCode = TREE_NESTED_CODE;
  treeLoadmoreCode = TREE_LOADMORE_CODE;
}
