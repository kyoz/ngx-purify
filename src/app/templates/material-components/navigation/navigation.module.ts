import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
      { path: 'sidenav', loadChildren: './sidenav/sidenav.module#SidenavModule' },
      { path: 'toolbar', component: ToolbarComponent }
    ])
  ]
})
export class NavigationModule {}
