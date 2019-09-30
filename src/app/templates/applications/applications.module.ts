import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { SearchApp } from './search/search.component';
import { EventLogApp } from './event-log/event-log.component';
import { TodoApp } from './todo/todo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      { path: 'search', component: SearchApp },
      { path: 'event-log', component: EventLogApp },
      { path: 'todo', component: TodoApp },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    SearchApp,
    EventLogApp,
    TodoApp
  ]
})
export class ApplicationsModule {}
