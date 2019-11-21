import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { ContactApp, ContactAppMenu, ContactAppInfoDialog } from './contact';
import { EventLogApp } from './event-log/event-log.component';
import { SearchApp } from './search/search.component';
import { MessengerApp, MessengerAppStatus } from './messenger';
import { TodoApp } from './todo/todo.component';

// Services
import { MessengerAppService } from '../applications/messenger/messenger.service';
import { ContactAppService } from '../applications/contact/contact.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      { path: 'contact', component: ContactApp },
      { path: 'event-log', component: EventLogApp },
      { path: 'messenger', component: MessengerApp },
      { path: 'search', component: SearchApp },
      { path: 'todo', component: TodoApp },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    ContactApp, ContactAppMenu, ContactAppInfoDialog,
    EventLogApp,
    MessengerApp, MessengerAppStatus,
    SearchApp,
    TodoApp
  ],
  providers: [
    MessengerAppService,
    ContactAppService
  ],
  entryComponents: [
    ContactAppInfoDialog
  ]
})
export class ApplicationsModule {}
