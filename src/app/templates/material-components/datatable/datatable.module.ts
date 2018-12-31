import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'paginator', loadChildren: './paginator/paginator.module#PaginatorModule' },
      { path: 'sort-header', loadChildren: './sort-header/sort-header.module#SortHeaderModule' },
      { path: 'table', component: TableComponent }
    ])
  ],
})
export class DatatableModule {}
