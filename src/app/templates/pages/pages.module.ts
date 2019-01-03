import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' }
    ])
  ]
})
export class PagesModule {}
