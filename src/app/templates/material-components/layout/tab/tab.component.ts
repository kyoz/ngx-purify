import { Component } from '@angular/core';

import * as TAB_HEADER_BELOW_CODE from './examples/tab-header-below-example/tab-header-below-code';
import * as TAB_OVERVIEW_CODE from './examples/tab-overview-example/tab-overview-code';
import * as TAB_CUSTOM_LABEL_CODE from './examples/tab-custom-label-example/tab-custom-label-code';
import * as TAB_DYNAMIC_HEIGHT_CODE from './examples/tab-dynamic-height-example/tab-dynamic-height-code';
import * as TAB_DYNAMIC_CODE from './examples/tab-dynamic-example/tab-dynamic-code';
import * as TAB_LAZYLOAD_CODE from './examples/tab-lazyload-example/tab-lazyload-code';
import * as TAB_STRETCHED_LABELS_CODE from './examples/tab-stretched-labels-example/tab-stretched-labels-code';
import * as TAB_THEME_CODE from './examples/tab-theme-example/tab-theme-code';
import * as TAB_ASYNC_CODE from './examples/tab-async-example/tab-async-code';
import * as TAB_NAVBAR_CODE from './examples/tab-navbar-example/tab-navbar-code';

@Component({
  selector: 'app-material-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  tabOverviewCode = TAB_OVERVIEW_CODE;
  tabCustomLabelCode = TAB_CUSTOM_LABEL_CODE;
  tabDynamicHeightCode = TAB_DYNAMIC_HEIGHT_CODE;
  tabDynamicCode = TAB_DYNAMIC_CODE;
  tabLazyloadCode = TAB_LAZYLOAD_CODE;
  tabStretchedLabelsCode = TAB_STRETCHED_LABELS_CODE;
  tabHeaderBelowCode = TAB_HEADER_BELOW_CODE;
  tabThemeCode = TAB_THEME_CODE;
  tabAsyncCode = TAB_ASYNC_CODE;
  tabNavbarCode = TAB_NAVBAR_CODE;
}
