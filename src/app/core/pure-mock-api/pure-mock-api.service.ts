import { Injectable } from '@angular/core';
import { ChatBoxMockApiService } from './services/chatbox.service';

@Injectable()
export class PureMockApiService {
  constructor(public chatbox: ChatBoxMockApiService) { }
}
