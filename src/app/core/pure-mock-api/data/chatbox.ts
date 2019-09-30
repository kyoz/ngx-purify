import { ChatboxContact, ChatboxConversation } from '../../../shared/models/chatbox.model';

/**
 * NOTE
 * By default, I do use id 0 to represent the current user (me), for easy create some mock data
 * This is just a minimal structure to show the chatbox. You can get real data, parse, map...
 * and modified everything you want
 */

const today = new Date();

export const CHATBOX_CONTACTS: ChatboxContact[] = [
  { id: 1, name: 'Tom Robertson', status: 'online', unreadCount: 100, avatar: 'tom.jpg' },
  { id: 2, name: 'Nathaniel Blackburn', status: 'offline', unreadCount: 23, avatar: 'nathaniel.jpg' },
  { id: 3, name: 'Kaitlyn Jimenez', status: 'online', unreadCount: 10, avatar: 'kaitlyn.jpg' },
  { id: 4, name: 'Makhi Vazquez', status: 'busy', unreadCount: 9, avatar: 'makhi.jpg' },
  { id: 5, name: 'Willodean Lilley', status: 'do-not-disturb', unreadCount: 4, avatar: 'willodean.jpg' },
  { id: 6, name: 'Penny Hefley', status: 'busy', unreadCount: 3, avatar: 'penny.jpg' },
  { id: 7, name: 'Halen Pennington', status: 'online', unreadCount: 1, avatar: 'halen.jpg' },
  { id: 8, name: 'Madelyn Decker', status: 'offline', unreadCount: 1, avatar: 'madelyn.jpg' },
  { id: 9, name: 'Christian Pittman', status: 'online', unreadCount: 1, avatar: 'christian.jpg' },
  { id: 10, name: 'Marietta Hereford', status: 'do-not-disturb', unreadCount: 1, avatar: 'marrietta.jpg' },
  { id: 11, name: 'Valentin Chapman', status: 'busy', unreadCount: 0, avatar: 'valentin.jpg' },
  { id: 12, name: 'Raphael Walter', status: 'online', unreadCount: 0, avatar: 'raphael.jpg' },
  { id: 13, name: 'Kiera Gunnell', status: 'offline', unreadCount: 0, avatar: 'kiera.jpg' },
  { id: 14, name: 'Adrien Lomonaco', status: 'busy', unreadCount: 0, avatar: 'adrien.jpg' },
  { id: 15, name: 'Roberto Brownstein', status: 'online', unreadCount: 0, avatar: 'roberto.jpg' },
  { id: 16, name: 'Maxine Mccarville', status: 'online', unreadCount: 0, avatar: 'maxine.jpg' },
  { id: 17, name: 'Felicia Senegal', status: 'do-not-disturb', unreadCount: 0, avatar: 'felicia.jpg' },
  { id: 18, name: 'Cristina Decosta', status: 'online', unreadCount: 0, avatar: 'cristina.jpg' },
  { id: 19, name: 'Albertha Pless', status: 'busy', unreadCount: 0, avatar: 'albertha.jpg' },
  { id: 20, name: 'Taylor Nguyen', status: 'online', unreadCount: 0, avatar: 'taylor.jpg' },
];

export const CHATBOX_CONVERSASIONS: ChatboxConversation[] = [
  {
    owner: 0,
    withContact: 1,
    messages: [
      { id: 1, sender: 1, message: `Ey`, createAt: today },
      { id: 2, sender: 0, message: `Yo :)`, createAt: today },
      { id: 3, sender: 1, message: `How's going bro ?`, createAt: today },
      { id: 4, sender: 0, message: `Not bad at all`, createAt: today },
      { id: 5, sender: 0, message: `How are you ?`, createAt: today },
      { id: 6, sender: 1, message: `Just fine :))`, createAt: today },
      { id: 7, sender: 1, message: `Are you free this weekend ?`, createAt: today },
      { id: 8, sender: 1, message: `I do have something interesting for you`, createAt: today },
      { id: 9, sender: 1, message: ':))', createAt: today },
      { id: 10, sender: 0, message: `Sound interesting`, createAt: today },
      { id: 11, sender: 0, message: `7:)`, createAt: today },
      { id: 12, sender: 1, message: `Oh i have to go now, see youu`, createAt: today },
      { id: 13, sender: 0, message: `See you >.<`, createAt: today }
    ]
  },
  {
    owner: 0,
    withContact: 2,
    messages: [
      { id: 14, sender: 2, message: 'Yo', createAt: today },
      { id: 15, sender: 0, message: 'Hi', createAt: today },
      { id: 16, sender: 2, message: 'Can you help me solve some problems ?', createAt: today },
      { id: 17, sender: 2, message: `I'm stuck :(`, createAt: today },
      { id: 18, sender: 0, message: 'Ok bro', createAt: today },
      { id: 19, sender: 0, message: `What's your problem ?`, createAt: today },
      { id: 20, sender: 2, message: `I don't know, maybe i'm so handsome :(`, createAt: today },
      { id: 21, sender: 0, message: `Bye >.<`, createAt: today }
    ]
  },
  {
    owner: 0,
    withContact: 3,
    messages: [
      { id: 22, sender: 3, message: 'Hello', createAt: today },
      { id: 23, sender: 0, message: 'Hello', createAt: today },
      { id: 24, sender: 3, message: '...', createAt: today },
      { id: 25, sender: 3, message: `I need your help`, createAt: today },
      { id: 26, sender: 0, message: '>.<', createAt: today },
      { id: 27, sender: 0, message: `Come on, don't tell me your problem is you are so cute`, createAt: today },
      { id: 28, sender: 3, message: `How did you know ? :)`, createAt: today },
      { id: 29, sender: 0, message: `>.<`, createAt: today }
    ]
  },
  {
    owner: 0,
    withContact: 4,
    messages: [
      { id: 30, sender: 4, message: 'Yo, Kyoz. We have to release new version tomorrow', createAt: today },
      { id: 31, sender: 0, message: `Don't worry, i'll handle that :)`, createAt: today },
      { id: 32, sender: 4, message: 'Cool', createAt: today },
      { id: 33, sender: 4, message: `I'll buy you a coffee :]]`, createAt: today },
      { id: 34, sender: 0, message: 'No sugar please :))', createAt: today },
      { id: 35, sender: 4, message: `Ok bro :)`, createAt: today },
      { id: 36, sender: 0, message: `:)))`, createAt: today }
    ]
  },
  { owner: 0, withContact: 5, messages: [] },
  { owner: 0, withContact: 6, messages: [] },
  { owner: 0, withContact: 7, messages: [] },
  { owner: 0, withContact: 8, messages: [] },
  { owner: 0, withContact: 9, messages: [] },
  { owner: 0, withContact: 10, messages: [] },
  { owner: 0, withContact: 11, messages: [] },
  { owner: 0, withContact: 12, messages: [] },
  { owner: 0, withContact: 13, messages: [] },
  { owner: 0, withContact: 14, messages: [] },
  { owner: 0, withContact: 15, messages: [] },
  { owner: 0, withContact: 16, messages: [] },
  { owner: 0, withContact: 17, messages: [] },
  { owner: 0, withContact: 18, messages: [] },
  { owner: 0, withContact: 19, messages: [] },
  { owner: 0, withContact: 20, messages: [] }
];
