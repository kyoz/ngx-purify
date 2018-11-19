import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MenuComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'menu', component: MenuComponent },
      { path: 'sidenav', component: SidenavComponent },
      { path: 'toolbar', component: ToolbarComponent }
    ])
  ]
})
export class NavigationModule {}
