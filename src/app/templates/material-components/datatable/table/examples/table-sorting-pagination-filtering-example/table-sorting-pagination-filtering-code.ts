export const html = `
<mat-form-field>
  <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
</mat-form-field>

<div class="mat-elevation-z8">
  <table mat-table [dataSource]="dataSource" matSort>

    <!-- ID Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
      <td mat-cell *matCellDef="let row"> {{row.id}} </td>
    </ng-container>

    <!-- Progress Column -->
    <ng-container matColumnDef="progress">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>
      <td mat-cell *matCellDef="let row"> {{row.progress}}% </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
      <td mat-cell *matCellDef="let row"> {{row.name}} </td>
    </ng-container>

    <!-- Color Column -->
    <ng-container matColumnDef="color">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>
      <td mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;">
    </tr>
  </table>

  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
</div>
`;

export const ts = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'table-sorting-pagination-filtering-example',
  templateUrl: './table-sorting-pagination-filtering-example.html',
  styleUrls: ['./table-sorting-pagination-filtering-example.scss']
})
export class TableSortingPaginationFilteringExample implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
`;

export const scss = `
table {
  width: 100%;
}

.mat-form-field {
  font-size: 14px;
  width: 100%;
}

td, th {
  width: 25%;
}
`;
