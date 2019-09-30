import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureMockApiService } from './pure-mock-api.service';
import { ChatBoxMockApiService } from './services/chatbox.service';
import { SearchMockApiService } from './services/search.service';
import { EventLogMockApiService } from './services/event-logs.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    PureMockApiService,
    ChatBoxMockApiService,
    SearchMockApiService,
    EventLogMockApiService
  ],
})
export class PureMockApiModule {}
