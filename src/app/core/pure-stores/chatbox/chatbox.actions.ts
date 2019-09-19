import { ChatboxMessage } from '../../pure-models/chatbox';

export class GetContacts {
  static readonly type = '[Side Chatbox] Get Contacts';
}

export class GetConversation {
  static readonly type = '[Side Chatbox] Get Conversation';
  constructor(public contactId: number) {}
}

export class SendMessage {
  static readonly type = '[Side Chatbox] Send Message';
  constructor(public chatboxMessage: ChatboxMessage) {}
}
