import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'paginator-overview-example',
  templateUrl: './paginator-overview-example.html',
  styleUrls: ['./paginator-overview-example.scss']
})
export class PaginatorOverviewExample {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
