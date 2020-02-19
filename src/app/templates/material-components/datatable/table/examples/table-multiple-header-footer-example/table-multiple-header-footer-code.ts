export const html = `
<table mat-table [dataSource]="transactions" class="mat-elevation-z8">
  <!-- Item Column -->
  <ng-container matColumnDef="item">
    <th mat-header-cell *matHeaderCellDef> Item </th>
    <td mat-cell *matCellDef="let transaction"> {{transaction.item}} </td>
    <td mat-footer-cell *matFooterCellDef> Total </td>
  </ng-container>

  <!-- Cost Column -->
  <ng-container matColumnDef="cost">
    <th mat-header-cell *matHeaderCellDef> Cost </th>
    <td mat-cell *matCellDef="let transaction"> {{transaction.cost | currency}} </td>
    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>
  </ng-container>

  <!-- Item Description Column -->
  <ng-container matColumnDef="item-description">
    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>
  </ng-container>

  <!-- Cost Description Column -->
  <ng-container matColumnDef="cost-description">
    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>
  </ng-container>

  <!-- Disclaimer column -->
  <ng-container matColumnDef="disclaimer">
    <td mat-footer-cell *matFooterCellDef colspan="2">
      Please note that the cost of items displayed are completely and totally made up.
    </td>
  </ng-container>

  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->
  <tr mat-header-row *matHeaderRowDef="displayedColumns" class="example-first-header-row">
  </tr>
  <tr mat-header-row *matHeaderRowDef="['item-description', 'cost-description']" class="example-second-header-row">
  </tr>

  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

  <tr mat-footer-row *matFooterRowDef="displayedColumns" class="example-first-footer-row"></tr>
  <tr mat-footer-row *matFooterRowDef="['disclaimer']" class="example-second-footer-row"></tr>
</table>
`;

export const ts = `
import { Component } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'table-multiple-header-footer-example',
  templateUrl: './table-multiple-header-footer-example.html',
  styleUrls: ['./table-multiple-header-footer-example.scss']
})
export class TableMultipleHeaderFooterExample {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
`;

export const scss = `
table {
  width: 100%;
}

.example-first-header-row th {
  border-bottom: none;
}

.example-second-header-row {
  font-style: italic;
}

.example-first-footer-row {
  font-weight: bold;
}

.example-second-footer-row td {
  color: #900000;
}
`;
