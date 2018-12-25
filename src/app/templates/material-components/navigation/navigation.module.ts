import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Remove soon
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
      { path: 'sidenav', component: SidenavComponent },
      { path: 'toolbar', component: ToolbarComponent }
    ])
  ]
})
export class NavigationModule {}
