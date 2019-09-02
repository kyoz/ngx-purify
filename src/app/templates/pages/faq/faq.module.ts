
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';

// Components
import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    SharedModule,
    FaqRoutingModule
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule {	}
