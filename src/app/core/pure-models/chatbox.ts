export interface ChatboxContact {
  id: number;
  name: string;
  status: string;
  unreadCount: number;
  avatar: string;
}

export interface ChatboxConversation {
  owner: number;
  withContact: number;
  messages: ChatboxMessage[];
}

export interface ChatboxMessage {
  sender: number;
  message: string;
  createAt: Date;
}

export interface CurrentConversation {
  contactInfo: ChatboxContact;
  messages: ChatboxMessage[];
}
