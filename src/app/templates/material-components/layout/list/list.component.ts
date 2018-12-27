import { Component } from '@angular/core';

import * as SIMPLE_LIST_CODE from './examples/simple-list-example/simple-list-code';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  simpleListCode = SIMPLE_LIST_CODE;
}
