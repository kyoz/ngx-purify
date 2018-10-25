import { NgModule } from '@angular/core';

import { PureAutofocusDirective } from './autofocus.directive';
import { PurePerfectScrollbarDirective } from './perfect-scrollbar.directive';

@NgModule({
  declarations: [
    PureAutofocusDirective,
    PurePerfectScrollbarDirective
  ],
  exports: [
    PureAutofocusDirective,
    PurePerfectScrollbarDirective
  ],
})
export class PureDirectivesModule {}