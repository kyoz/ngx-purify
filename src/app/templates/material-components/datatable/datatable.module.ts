import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'paginator', loadChildren: './paginator/paginator.module#PaginatorModule' },
      { path: 'sort-header', loadChildren: './sort-header/sort-header.module#SortHeaderModule' },
      { path: 'table', loadChildren: './table/table.module#TableModule' }
    ])
  ],
})
export class DatatableModule {}
