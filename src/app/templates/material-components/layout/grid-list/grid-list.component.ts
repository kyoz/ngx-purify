import { Component } from '@angular/core';

import * as SIMPLE_GRID_LIST_CODE from './examples/simple-grid-list-example/simple-grid-list-code';

@Component({
  selector: 'app-material-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {
  simpleGridListCode = SIMPLE_GRID_LIST_CODE;
}
