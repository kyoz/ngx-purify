import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' },
      { path: 'errors', loadChildren: './errors/errors.module#ErrorsModule' }
    ])
  ]
})
export class PagesModule {}
