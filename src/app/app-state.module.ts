import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { sideChatBoxReducer } from './core/pure-components/pure-side-chatbox/pure-side-chatbox.reducer';

export const AppStateModule: ModuleWithProviders = StoreModule.forRoot({
  sideChatbox: sideChatBoxReducer
});
