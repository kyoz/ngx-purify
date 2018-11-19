import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    SortHeaderComponent,
    TableComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'paginator', component: PaginatorComponent },
      { path: 'sort-header', component: SortHeaderComponent },
      { path: 'table', component: TableComponent }
    ])
  ],
})
export class DatatableModule {}
