import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { BadgeComponent } from './badge/badge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './icon/icon.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonToggleComponent,
    ChipsComponent,
    IconComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'badge', component: BadgeComponent },
      { path: 'button', loadChildren: './button/button.module#ButtonModule' },
      { path: 'button-toggle', component: ButtonToggleComponent },
      { path: 'chips', component: ChipsComponent },
      { path: 'icon', component: IconComponent },
      { path: 'progress-bar', component: ProgressBarComponent },
      { path: 'progress-spinner', component: ProgressSpinnerComponent }
    ])
  ]
})
export class ButtonIndicatorsModule {}
