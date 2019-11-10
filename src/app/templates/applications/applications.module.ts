import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { SearchApp } from './search/search.component';
import { EventLogApp } from './event-log/event-log.component';
import { TodoApp } from './todo/todo.component';
import { MessengerApp, MessengerAppStatus } from './messenger';

// Services
import { MessengerAppService } from '../applications/messenger/messenger.service';

// Imports

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      { path: 'messenger', component: MessengerApp },
      { path: 'search', component: SearchApp },
      { path: 'event-log', component: EventLogApp },
      { path: 'todo', component: TodoApp },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    MessengerApp, MessengerAppStatus,
    SearchApp,
    EventLogApp,
    TodoApp
  ],
  providers: [
    MessengerAppService
  ]
})
export class ApplicationsModule {}
