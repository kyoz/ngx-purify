import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { Search } from './search/search.component';
import { EventLog } from './event-log/event-log.component';
import { Todo } from './todo/todo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      { path: 'search', component: Search },
      { path: 'event-log', component: EventLog },
      { path: 'todo', component: Todo },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    Search,
    EventLog,
    Todo
  ]
})
export class ApplicationsModule {}
