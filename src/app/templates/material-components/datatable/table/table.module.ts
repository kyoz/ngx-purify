import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Table Components
import { TableComponent } from './table.component';

// Table Examples
import { TableOverviewExample } from './examples/table-overview-example/table-overview-example';
import { TableFlexExample } from './examples/table-flex-example/table-flex-example';
import { TableDynamicColumnExample } from './examples/table-dynamic-column-example/table-dynamic-column-example';
import { TableExpandableRowExample } from './examples/table-expandable-row-example/table-expandable-row-example';
import { TableFilteringExample } from './examples/table-filtering-example/table-filtering-example';
import { TableFooterRowExample } from './examples/table-footer-row-example/table-footer-row-example';
import { TableHttpExample } from './examples/table-http-example/table-http-example';
import { TableMultipleHeaderFooterExample } from './examples/table-multiple-header-footer-example/table-multiple-header-footer-example';
import { TableSortingPaginationFilteringExample } from './examples/table-sorting-pagination-filtering-example/table-sorting-pagination-filtering-example';
import { TableSelectionExample } from './examples/table-selection-example/table-selection-example';
import { TableStickyColumnsExample } from './examples/table-sticky-columns-example/table-sticky-columns-example';
import { TableStickyHeaderExample } from './examples/table-sticky-header-example/table-sticky-header-example';
import { TableStickyFooterExample } from './examples/table-sticky-footer-example/table-sticky-footer-example';

const COMPONENTS = [
  // Table Components
  TableComponent,

  // Examples
  TableOverviewExample,
  TableFlexExample,
  TableDynamicColumnExample,
  TableExpandableRowExample,
  TableFilteringExample,
  TableFooterRowExample,
  TableHttpExample,
  TableMultipleHeaderFooterExample,
  TableSortingPaginationFilteringExample,
  TableSelectionExample,
  TableStickyColumnsExample,
  TableStickyHeaderExample,
  TableStickyFooterExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class TableModule {}
