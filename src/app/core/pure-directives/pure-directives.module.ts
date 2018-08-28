import { NgModule } from '@angular/core';

import { PureAutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    PureAutofocusDirective
  ],
  exports: [
    PureAutofocusDirective
  ],
})
export class PureDirectivesModule {}