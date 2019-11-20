import { Contact } from '../../../shared/models/contact.model';

export const CONTACTS: Contact[] = [
  { id: 1, firstName: 'Tom Robertson', nickName: 'Tom the Cat', gender: 1, avatar: 'tom.jpg', birthday: new Date(1992, 12, 1), email: 'tomrobert@mymail.com', phone: '+9234567890', job: 'Developer', company: 'BullApp', favorite: true },
  { id: 2, firstName: 'Nathaniel', lastName: 'Blackburn', gender: 1, avatar: 'nathaniel.jpg', birthday: new Date(1989, 2, 10), email: 'blackburrrn@mymail.com', job: 'Saleman', company: 'Toyota CNS', favorite: true },
  { id: 3, firstName: 'Kaitlyn Jimenez', gender: 0, avatar: 'kaitlyn.jpg', birthday: new Date(1994, 1, 1), favorite: false },
  { id: 4, firstName: 'Makhi Vazquez', gender: 1, avatar: 'makhi.jpg', birthday: new Date(1995, 1, 12), favorite: false },
  { id: 5, firstName: 'Willodean Lilley', gender: 0, avatar: 'willodean.jpg', birthday: new Date(1993, 4, 6), email: 'will0lean@mymail.com', phone: '+9876543201', job: 'Worker', company: 'Plating SIS', favorite: false },
  { id: 6, firstName: 'Penny Hefley', nickName: 'Penley', gender: 0, avatar: 'penny.jpg', birthday: new Date(1995, 7, 4), email: 'pennyme@mymail.com', phone: '+9234567892', favorite: false },
  { id: 7, firstName: 'Halen', lastName: 'Pennington', gender: 1, avatar: 'halen.jpg', birthday: new Date(1992, 2, 11), email: 'halenther@mymail.com', favorite: false },
  { id: 8, firstName: 'Madelyn Decker', gender: 1, avatar: 'madelyn.jpg', birthday: new Date(1989, 2, 8), email: 'decker.m@mymail.com', favorite: false },
  { id: 9, firstName: 'Christian Pittman', gender: 1, avatar: 'christian.jpg', birthday: new Date(1984, 2, 7), email: 'pittman.cris@mymail.com', favorite: false },
  { id: 10, firstName: 'Marietta', lastName: 'Hereford', gender: 0, avatar: 'marrietta.jpg', birthday: new Date(1996, 2, 8), email: 'hereford_28@mymail.com', job: 'Astrologer', company: 'Universal AST', favorite: true },
  { id: 11, firstName: 'Valentin Chapman', nickName: 'CMan', gender: 1, avatar: 'valentin.jpg', birthday: new Date(1985, 11, 11), email: 'c_mannn@mymail.com', phone: '+9234562789', favorite: false },
  { id: 12, firstName: 'Raphael', lastName: 'Walter', gender: 1, avatar: 'raphael.jpg', birthday: new Date(1992, 12, 12), email: 'walter_jr@mymail.com', favorite: false },
  { id: 13, firstName: 'Kiera Gunnell', gender: 0, avatar: 'kiera.jpg', birthday: new Date(1988, 11, 12), favorite: false },
  { id: 14, firstName: 'Adrien Lomonaco', gender: 0, avatar: 'adrien.jpg', birthday: new Date(1997, 6, 6), phone: '+923452789', job: 'Farmer', company: `Roberto's Farm`, favorite: false },
  { id: 15, firstName: 'Roberto Brownstein', gender: 1, avatar: 'roberto.jpg', birthday: new Date(1991, 12, 1), phone: '+923456789', job: 'Singer', company: 'Lady Killa', favorite: true },
  { id: 16, firstName: 'Maxine', lastName: 'Mccarville', nickName: 'Maximux', gender: 0, avatar: 'maxine.jpg', birthday: new Date(1994, 1, 1), email: '@maxi_nemymail.com', favorite: false },
  { id: 17, firstName: 'Felicia', lastName: 'Senegal', gender: 1, avatar: 'felicia.jpg', birthday: new Date(1990, 7, 8), email: 'sene_f@mymail.com', favorite: false },
  { id: 18, firstName: 'Cristina', lastName: 'Decosta' , nickName: 'Cristy', gender: 0, birthday: new Date(1993, 7, 2), phone: '+923456789', job: 'Professional Gamer', company: 'Fox Esport', favorite: true },
  { id: 19, firstName: 'Albertha Pless', gender: 0, birthday: new Date(1994, 12, 12), email: 'plessa_1994@mymail.com', job: 'Professional Gamer', company: 'Fox Esport', favorite: true },
  { id: 20, firstName: 'Taylor Nguyen', gender: 0, birthday: new Date(1990, 11, 1), email: 'taylor_nguyen_11@mymail.com', favorite: false },
  { id: 21, firstName: 'Bao Phan', gender: 1, birthday: new Date(1995, 8, 1), email: 'bao_phan_vn@mymail.com', favorite: false },
  { id: 22, firstName: 'Cristian Bi', gender: 1, birthday: new Date(1996, 8, 6), email: 'cristian_bi_me@mymail.com', phone: '+9234567892', job: 'Rapper', company: 'Sound DeX', favorite: true },
  { id: 23, firstName: 'Black Maxi', gender: 1, birthday: new Date(1993, 7, 2), favorite: false },
  { id: 24, firstName: 'William Waltr', gender: 1, birthday: new Date(1995, 2, 2), email: 'will_w22@mymail.com', job: 'Rapper', company: 'G.West', favorite: true },
  { id: 25, firstName: 'Chesie Rose', gender: 1, birthday: new Date(1996, 2, 8), email: 'chesie_r0se@mymail.com', job: 'Guitarist', company: 'G.West', favorite: true },
  { id: 26, firstName: 'Trung Nguyen', gender: 1, birthday: new Date(1992, 4, 8), email: 'trung.np@mymail.com', favorite: false },
];

export const FREQUENTLY_CONTACT_IDS = [1,3,5,7,8,10,15];
