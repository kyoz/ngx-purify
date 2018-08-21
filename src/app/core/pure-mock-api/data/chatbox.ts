import { IChatboxContact, IChatBoxConversation } from "../interface/chatbox";

/**
 * NOTE
 * By default, I do use id 0 to represent the current user (me), for easy create some mock data
 * This is just a minimal structure to show the chatbox. You can get real data, parse, map...
 * and modified everything you want
 */

export const CHATBOX_CONTACTS: IChatboxContact[] = [
  { id: 1, name: 'Tom', status: 'online', unreadCount: 100, avatar: 'https://i.imgur.com/5oO1dCG.jpg' },
  { id: 2, name: 'John', status: 'offline', unreadCount: 23, avatar: 'https://i.imgur.com/CfIDiL7.jpg' },
  { id: 3, name: 'Anna', status: 'online', unreadCount: 10, avatar: 'https://i.imgur.com/1VWLPeN.jpg' },
  { id: 4, name: 'Josh', status: 'busy', unreadCount: 9, avatar: 'https://i.imgur.com/83M3bv4.jpg' },
  { id: 5, name: 'Mai', status: 'do-not-disturb', unreadCount: 4, avatar: 'https://i.imgur.com/Iq38YkR.jpg' },
  { id: 6, name: 'Nguyen', status: 'busy', unreadCount: 3, avatar: 'https://i.imgur.com/njcO0Av.jpg' },
  { id: 7, name: 'Halen', status: 'online', unreadCount: 1, avatar: 'https://i.imgur.com/WsJ03gW.jpg' },
  { id: 8, name: 'Jerry', status: 'offline', unreadCount: 1, avatar: 'https://i.imgur.com/BCUj1C6.jpg' },
  { id: 9, name: 'Mohamed', status: 'online', unreadCount: 1, avatar: 'https://i.imgur.com/t54g4uj.jpg' },
  { id: 10, name: 'Maria', status: 'do-not-disturb', unreadCount: 1, avatar: 'https://i.imgur.com/vhs6BFs.jpg' },
  { id: 11, name: 'Noah', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/7IukQ70.jpg' },
  { id: 12, name: 'William', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/YSV9TUq.jpg' },
  { id: 13, name: 'Emma', status: 'offline', unreadCount: 0, avatar: 'https://i.imgur.com/1VWLPeN.jpg' },
  { id: 14, name: 'Sofia', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/naTAVdB.jpg' },
  { id: 15, name: 'Eden', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/ZnyU3Gd.jpg' },
  { id: 16, name: 'Cristine', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/Ko23cs5.jpg' },
  { id: 17, name: 'Sam', status: 'do-not-disturb', unreadCount: 0, avatar: 'https://i.imgur.com/HjgPQEv.jpg' },
  { id: 18, name: 'Oliva', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/Yg08zGB.jpg' },
  { id: 19, name: 'Linda', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/nTQ5X0j.jpg' },
  { id: 20, name: 'Zoe', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/gEAkS2t.jpg' },
];

export const CHATBOX_CONVERSASIONS: IChatBoxConversation[] = [
  {
    owner: 0,
    withContact: 1,
    messages: [
      { sender: 1, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 1, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 1, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 1, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 1, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
    ]
  },
  {
    owner: 0,
    withContact: 2,
    messages: [
      { sender: 2, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 2, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 2, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 2, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
      { sender: 0, message: 'Hello', createAt: new Date('2012-04-23T18:25:43.511Z') },
    ]
  }
];
