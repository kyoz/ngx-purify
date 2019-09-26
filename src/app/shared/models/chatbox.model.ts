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
  id?: number;
  sender: number;
  message: string;
  createAt: Date;
}

export interface CurrentConversation {
  contact: ChatboxContact;
  messages: ChatboxMessage[];
}
