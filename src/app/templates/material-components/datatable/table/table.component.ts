import { Component } from '@angular/core';

import * as TABLE_OVERVIEW_CODE from './examples/table-overview-example/table-overview-code';
import * as TABLE_FLEX_CODE from './examples/table-flex-example/table-flex-code';
import * as TABLE_DYNAMIC_COLUMN_CODE from './examples/table-dynamic-column-example/table-dynamic-column-code';
import * as TABLE_EXPANDABLE_ROW_CODE from './examples/table-expandable-row-example/table-expandable-row-code';
import * as TABLE_FILTERING_CODE from './examples/table-filtering-example/table-filtering-code';
import * as TABLE_FOOTER_ROW_CODE from './examples/table-footer-row-example/table-footer-row-code';
import * as TABLE_HTTP_CODE from './examples/table-http-example/table-http-code';
import * as TABLE_MULTIPLE_HEADER_FOOTER_CODE from './examples/table-multiple-header-footer-example/table-multiple-header-footer-code';
import * as TABLE_SORTING_PAGINATION_FILTERING_CODE from './examples/table-sorting-pagination-filtering-example/table-sorting-pagination-filtering-code';
import * as TABLE_SELECTION_CODE from './examples/table-selection-example/table-selection-code';
import * as TABLE_STICKY_COLUMNS_CODE from './examples/table-sticky-columns-example/table-sticky-columns-code';
import * as TABLE_STICKY_HEADER_CODE from './examples/table-sticky-header-example/table-sticky-header-code';
import * as TABLE_STICKY_FOOTER_CODE from './examples/table-sticky-footer-example/table-sticky-footer-code';

@Component({
  selector: 'app-material-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableOverviewCode = TABLE_OVERVIEW_CODE;
  tableFlexCode = TABLE_FLEX_CODE;
  tableDynamicColumnCode = TABLE_DYNAMIC_COLUMN_CODE;
  tableExpandableRowCode = TABLE_EXPANDABLE_ROW_CODE;
  tableFilteringCode = TABLE_FILTERING_CODE;
  tableFooterRowCode = TABLE_FOOTER_ROW_CODE;
  tableHttpCode = TABLE_HTTP_CODE;
  tableMultipleHeaderFooterCode = TABLE_MULTIPLE_HEADER_FOOTER_CODE;
  tableSortingPaginationFilteringCode = TABLE_SORTING_PAGINATION_FILTERING_CODE;
  tableSelectionCode = TABLE_SELECTION_CODE;
  tableStickyColumnsCode = TABLE_STICKY_COLUMNS_CODE;
  tableStickyHeaderCode = TABLE_STICKY_HEADER_CODE;
  tableStickyFooterCode = TABLE_STICKY_FOOTER_CODE;
}
