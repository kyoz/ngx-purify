import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureMockApiService } from './pure-mock-api.service';
import { ChatBoxMockApiService } from './services/chatbox.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    PureMockApiService,
    ChatBoxMockApiService
  ],
})
export class PureMockApiModule {}
