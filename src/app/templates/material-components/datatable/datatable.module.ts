import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { PaginatorModule } from './paginator/paginator.module';
import { SortHeaderModule } from './sort-header/sort-header.module';
import { TableModule } from './table/table.module';

// Components
import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    PaginatorModule,
    SortHeaderModule,
    TableModule,

    RouterModule.forChild([
      { path: 'paginator', component: PaginatorComponent },
      { path: 'sort-header', component: SortHeaderComponent },
      { path: 'table', component: TableComponent }
    ])
  ],
})
export class DatatableModule {}
