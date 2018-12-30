import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
      { path: 'button', loadChildren: './button/button.module#ButtonModule' },
      { path: 'button-toggle', loadChildren: './button-toggle/button-toggle.module#ButtonToggleModule' },
      { path: 'chips', loadChildren: './chips/chips.module#ChipsModule' },
      { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
      { path: 'progress-bar', component: ProgressBarComponent },
      { path: 'progress-spinner', component: ProgressSpinnerComponent }
    ])
  ]
})
export class ButtonIndicatorsModule {}
