export const html = `
<mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
  </ng-container>

  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
</mat-table>
`;

export const ts = `
import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'table-flex-example',
  templateUrl: './table-flex-example.html',
  styleUrls: ['./table-flex-example.scss']
})
export class TableFlexExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
`;

export const scss = `
table {
  width: 100%;
}
`;
