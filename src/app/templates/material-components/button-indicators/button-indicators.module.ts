import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
      { path: 'button', loadChildren: './button/button.module#ButtonModule' },
      { path: 'button-toggle', loadChildren: './button-toggle/button-toggle.module#ButtonToggleModule' },
      { path: 'chips', loadChildren: './chips/chips.module#ChipsModule' },
      { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
      { path: 'progress-bar', loadChildren: './progress-bar/progress-bar.module#ProgressBarModule' },
      { path: 'progress-spinner', loadChildren: './progress-spinner/progress-spinner.module#ProgressSpinnerModule' },
      { path: 'ripples', loadChildren: './ripples/ripples.module#RipplesModule' }
    ])
  ]
})
export class ButtonIndicatorsModule {}
