import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from './button/button.module';
import { ButtonToggleModule } from './button-toggle/button-toggle.module';
import { ChipsModule } from './chips/chips.module';
import { IconModule } from './icon/icon.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';
import { RipplesModule } from './ripples/ripples.module';

// Components
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './icon/icon.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RipplesComponent } from './ripples/ripples.component';

// Components

@NgModule({
  imports: [
    BadgeModule,
    ButtonModule,
    ButtonToggleModule,
    ChipsModule,
    IconModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RipplesModule,

    RouterModule.forChild([
      { path: 'badge', component: BadgeComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'button-toggle', component: ButtonToggleComponent },
      { path: 'chips', component: ChipsComponent },
      { path: 'icon', component: IconComponent },
      { path: 'progress-bar', component: ProgressBarComponent },
      { path: 'progress-spinner', component: ProgressSpinnerComponent },
      { path: 'ripples', component: RipplesComponent }
    ])
  ]
})
export class ButtonIndicatorsModule {}
