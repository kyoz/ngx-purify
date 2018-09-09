import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pureChatboxReducer } from './core/pure-components/pure-chatbox/pure-chatbox.reducer';

export const AppStateModule: ModuleWithProviders = StoreModule.forRoot({
  sideChatbox: pureChatboxReducer
});
