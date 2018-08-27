export interface IChatboxContact {
  id: number,
  name: string,
  status: string,
  unreadCount: number,
  avatar: string
}

export interface IChatBoxConversation {
  owner: number,
  withContact: number,
  messages: IChatBoxMessage[]
}

export interface IChatBoxMessage {
  sender: number,
  message: string,
  createAt: Date
}

export interface ICurrentConversation {
  contactInfo: IChatboxContact,
  messages: IChatBoxMessage[]
}
