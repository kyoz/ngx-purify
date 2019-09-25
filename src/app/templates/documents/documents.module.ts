import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { Changelog } from './changelog/changelog.component';

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild([
      { path: 'changelog', component: Changelog}
    ])
  ],
  declarations: [
    Changelog
  ]
})
export class DocumentsModule {	}
