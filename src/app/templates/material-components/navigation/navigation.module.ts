import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
      { path: 'sidenav', loadChildren: './sidenav/sidenav.module#SidenavModule' },
      { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' }
    ])
  ]
})
export class NavigationModule {}
