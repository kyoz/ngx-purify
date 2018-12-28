import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Tab Components
import { TabComponent } from './tab.component';

// Tab Examples
import { HeaderBelowTabExample } from './examples/header-below-tab-example/header-below-tab-example';
import { SimpleTabExample } from './examples/simple-tab-example/simple-tab-example';
import { TabCustomLabelExample } from './examples/tab-custom-label-example/tab-custom-label-example';
import { TabDynamicHeightExample } from './examples/tab-dynamic-height-example/tab-dynamic-height-example';
import { TabDynamicExample } from './examples/tab-dynamic-example/tab-dynamic-example';
import { TabLazyloadExample } from './examples/tab-lazyload-example/tab-lazyload-example';
import { TabStretchedLabelsExample } from './examples/tab-stretched-labels-example/tab-stretched-labels-example';
import { TabThemeExample } from './examples/tab-theme-example/tab-theme-example';
import { TabAsyncExample } from './examples/tab-async-example/tab-async-example';
import { TabNavbarExample } from './examples/tab-navbar-example/tab-navbar-example';

@NgModule({
  declarations: [
    // Tab Components
    TabComponent,

    // Examples
    HeaderBelowTabExample,
    SimpleTabExample,
    TabCustomLabelExample,
    TabDynamicHeightExample,
    TabDynamicExample,
    TabLazyloadExample,
    TabStretchedLabelsExample,
    TabThemeExample,
    TabAsyncExample,
    TabNavbarExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: TabComponent}
    ])
  ]
})
export class TabModule {}
