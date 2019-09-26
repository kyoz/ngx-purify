import { Injectable } from '@angular/core';
import { ChatBoxMockApiService } from './services/chatbox.service';
import { SearchMockApiService } from './services/search.service';

@Injectable()
export class PureMockApiService {
  constructor(
    public chatbox: ChatBoxMockApiService,
    public search: SearchMockApiService
  ) { }
}
