export const html = `
<div class="example-container mat-elevation-z8">
  <div class="example-loading-shade" *ngIf="isLoadingResults || isRateLimitReached">
    <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
      GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>

  <div class="example-table-container">

    <table mat-table [dataSource]="data" class="example-table" matSort matSortActive="created" matSortDisableClear
      matSortDirection="asc">
      <!-- Number Column -->
      <ng-container matColumnDef="number">
        <th mat-header-cell *matHeaderCellDef>#</th>
        <td mat-cell *matCellDef="let row">{{row.number}}</td>
      </ng-container>

      <!-- Title Column -->
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef>Title</th>
        <td mat-cell *matCellDef="let row">{{row.title}}</td>
      </ng-container>

      <!-- State Column -->
      <ng-container matColumnDef="state">
        <th mat-header-cell *matHeaderCellDef>State</th>
        <td mat-cell *matCellDef="let row">{{row.state}}</td>
      </ng-container>

      <!-- Created Column -->
      <ng-container matColumnDef="created">
        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>
          Created
        </th>
        <td mat-cell *matCellDef="let row">{{row.created_at | date}}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>

  <mat-paginator [length]="resultsLength" [pageSize]="30"></mat-paginator>
</div>
`;

export const ts = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'table-http-example',
  templateUrl: './table-http-example.html',
  styleUrls: ['./table-http-example.scss']
})
export class TableHttpExample implements OnInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        \`$\{href}?q=repo:angular/components&sort=$\{sort}&order=$\{order}&page=$\{page + 1}\`;

    return this.http.get<GithubApi>(requestUrl);
  }
}
`;

export const scss = `
/* Structure */
.example-container {
  position: relative;
}

.example-table-container {
  position: relative;
  max-height: 400px;
  overflow: auto;
}

table {
  width: 100%;
}

.example-loading-shade {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 56px;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-rate-limit-reached {
  color: #980000;
  max-width: 360px;
  text-align: center;
}

/* Column Widths */
.mat-column-number,
.mat-column-state {
  max-width: 64px;
}

.mat-column-created {
  max-width: 124px;
}
`;
