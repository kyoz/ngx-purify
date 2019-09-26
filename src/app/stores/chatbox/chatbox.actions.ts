import { ChatboxMessage } from '../../shared/models/chatbox.model';

export class GetContacts {
  static readonly type = '[Pure Side Chatbox] Get Contacts';
}

export class GetConversation {
  static readonly type = '[Pure Side Chatbox] Get Conversation';
  constructor(public contactId: number) {}
}

export class SendMessage {
  static readonly type = '[Pure Side Chatbox] Send Message';
  constructor(public chatboxMessage: ChatboxMessage) {}
}
