import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { MenuModule } from './menu/menu.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

// Components
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    MenuModule,
    SidenavModule,
    ToolbarModule,

    RouterModule.forChild([
      { path: 'menu', component: MenuComponent },
      { path: 'sidenav', component: SidenavComponent },
      { path: 'toolbar', component: ToolbarComponent }
    ])
  ]
})
export class NavigationModule {}
