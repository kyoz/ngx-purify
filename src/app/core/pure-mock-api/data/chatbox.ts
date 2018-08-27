import { IChatboxContact, IChatBoxConversation } from "../interface/chatbox";

/**
 * NOTE
 * By default, I do use id 0 to represent the current user (me), for easy create some mock data
 * This is just a minimal structure to show the chatbox. You can get real data, parse, map...
 * and modified everything you want
 */

export const CHATBOX_CONTACTS: IChatboxContact[] = [
  { id: 1, name: 'Tom Robertson', status: 'online', unreadCount: 100, avatar: 'https://i.imgur.com/5oO1dCG.jpg' },
  { id: 2, name: 'Nathaniel Blackburn', status: 'offline', unreadCount: 23, avatar: 'https://i.imgur.com/CfIDiL7.jpg' },
  { id: 3, name: 'Kaitlyn Jimenez', status: 'online', unreadCount: 10, avatar: 'https://i.imgur.com/1VWLPeN.jpg' },
  { id: 4, name: 'Makhi Vazquez', status: 'busy', unreadCount: 9, avatar: 'https://i.imgur.com/83M3bv4.jpg' },
  { id: 5, name: 'Willodean Lilley', status: 'do-not-disturb', unreadCount: 4, avatar: 'https://i.imgur.com/Iq38YkR.jpg' },
  { id: 6, name: 'Penny Hefley', status: 'busy', unreadCount: 3, avatar: 'https://i.imgur.com/njcO0Av.jpg' },
  { id: 7, name: 'Halen Pennington', status: 'online', unreadCount: 1, avatar: 'https://i.imgur.com/WsJ03gW.jpg' },
  { id: 8, name: 'Madelyn Decker', status: 'offline', unreadCount: 1, avatar: 'https://i.imgur.com/BCUj1C6.jpg' },
  { id: 9, name: 'Christian Pittman', status: 'online', unreadCount: 1, avatar: 'https://i.imgur.com/t54g4uj.jpg' },
  { id: 10, name: 'Marietta Hereford', status: 'do-not-disturb', unreadCount: 1, avatar: 'https://i.imgur.com/vhs6BFs.jpg' },
  { id: 11, name: 'Valentin Chapman', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/7IukQ70.jpg' },
  { id: 12, name: 'Raphael Walter', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/YSV9TUq.jpg' },
  { id: 13, name: 'Kiera Gunnell', status: 'offline', unreadCount: 0, avatar: 'https://i.imgur.com/1VWLPeN.jpg' },
  { id: 14, name: 'Adrien Lomonaco', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/naTAVdB.jpg' },
  { id: 15, name: 'Roberto Brownstein', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/ZnyU3Gd.jpg' },
  { id: 16, name: 'Maxine Mccarville', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/Ko23cs5.jpg' },
  { id: 17, name: 'Felicia Senegal', status: 'do-not-disturb', unreadCount: 0, avatar: 'https://i.imgur.com/HjgPQEv.jpg' },
  { id: 18, name: 'Cristina Decosta', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/Yg08zGB.jpg' },
  { id: 19, name: 'Albertha Pless', status: 'busy', unreadCount: 0, avatar: 'https://i.imgur.com/nTQ5X0j.jpg' },
  { id: 20, name: 'Kiera Gunnell', status: 'online', unreadCount: 0, avatar: 'https://i.imgur.com/gEAkS2t.jpg' },
];

export const CHATBOX_CONVERSASIONS: IChatBoxConversation[] = [
  {
    owner: 0,
    withContact: 1,
    messages: [
      { sender: 1, message: `Ey`, createAt: new Date() },
      { sender: 0, message: `Yo :)`, createAt: new Date() },
      { sender: 1, message: `How's going bro ?`, createAt: new Date() },
      { sender: 0, message: `Not bad at all`, createAt: new Date() },
      { sender: 0, message: `How are you ?`, createAt: new Date() },
      { sender: 1, message: `Just fine :))`, createAt: new Date() },
      { sender: 1, message: `Are you free this weekend ?`, createAt: new Date() },
      { sender: 1, message: `I do have something interesting for you`, createAt: new Date() },
      { sender: 1, message: ':))', createAt: new Date() },
      { sender: 0, message: `Sound interesting`, createAt: new Date() },
      { sender: 0, message: `7:)`, createAt: new Date() },
      { sender: 1, message: `Oh i have to go now, see youu`, createAt: new Date() },
      { sender: 0, message: `See you >.<`, createAt: new Date() }
    ]
  },
  {
    owner: 0,
    withContact: 2,
    messages: [
      { sender: 2, message: 'Yo', createAt: new Date() },
      { sender: 0, message: 'Hi', createAt: new Date() },
      { sender: 2, message: 'Can you help me solve some problems ?', createAt: new Date() },
      { sender: 2, message: `I'm stuck :(`, createAt: new Date() },
      { sender: 0, message: 'Ok bro', createAt: new Date() },
      { sender: 0, message: `What's your problem ?`, createAt: new Date() },
      { sender: 2, message: `I don't know, maybe i'm so handsome :(`, createAt: new Date() },
      { sender: 0, message: `Bye >.<`, createAt: new Date() }
    ]
  },
  {
    owner: 0,
    withContact: 3,
    messages: [
      { sender: 3, message: 'Hello', createAt: new Date() },
      { sender: 0, message: 'Hello', createAt: new Date() },
      { sender: 3, message: '...', createAt: new Date() },
      { sender: 3, message: `I need your help`, createAt: new Date() },
      { sender: 0, message: '>.<', createAt: new Date() },
      { sender: 0, message: `Come on, don't tell me your problem is you are so cute`, createAt: new Date() },
      { sender: 3, message: `How did you know ? :)`, createAt: new Date() },
      { sender: 0, message: `>.<`, createAt: new Date() }
    ]
  },
  {
    owner: 0,
    withContact: 4,
    messages: [
      { sender: 4, message: 'Yo, Kyoz. We have to release new version tomorrow', createAt: new Date() },
      { sender: 0, message: `Don't worry, i'll handle that :)`, createAt: new Date() },
      { sender: 4, message: 'Cool', createAt: new Date() },
      { sender: 4, message: `I'll buy you a coffee :]]`, createAt: new Date() },
      { sender: 0, message: 'No sugar please :))', createAt: new Date() },
      { sender: 4, message: `Ok bro :)`, createAt: new Date() },
      { sender: 0, message: `:)))`, createAt: new Date() }
    ]
  }
];
