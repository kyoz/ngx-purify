export const html = `
<mat-form-field>
  List length:
  <input matInput [(ngModel)]="length">
</mat-form-field>

<mat-form-field>
  Page size:
  <input matInput [(ngModel)]="pageSize">
</mat-form-field>
<mat-form-field>
  Page size options:
  <input matInput
          [ngModel]="pageSizeOptions"
          (ngModelChange)="setPageSizeOptions($event)">
</mat-form-field>

<mat-paginator [length]="length"
              [pageSize]="pageSize"
              [pageSizeOptions]="pageSizeOptions"
              (page)="pageEvent = $event">
</mat-paginator>

<div *ngIf="pageEvent">
  <h5>Page Change Event Properties</h5>
  <div>List length: {{pageEvent.length}}</div>
  <div>Page size: {{pageEvent.pageSize}}</div>
  <div>Page index: {{pageEvent.pageIndex}}</div>
</div>
`;

export const ts = `
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
`;

export const scss = `
/** No CSS for this example */
`;
