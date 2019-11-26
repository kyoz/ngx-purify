import { Contact } from '../../shared/models/contact.model';

export class GetContacts {
  static readonly type = '[Contact App] Get Contacts';
  constructor(public type: 'all' | 'favorite' | 'frequently') { }
}

export class CreateContact {
  static readonly type = '[Contact App] Create Contact';
  constructor(public contact: Contact) { }
}

export class UpdateContact {
  static readonly type = '[Contact App] Update Contact';
  constructor(public contact: Contact) { }
}

export class RemoveContact {
  static readonly type = '[Contact App] Remove Contact';
  constructor(public contactId: number) { }
}

export class RemoveContacts {
  static readonly type = '[Contact App] Remove Contacts';
  constructor(public contacts: Contact[]) { }
}

export class FavoriteContact {
  static readonly type = '[Contact App] Favorite Contact';
  constructor(public contactId: number) { }
}

export class UnfavoriteContact {
  static readonly type = '[Contact App] Unfavorite Contact';
  constructor(public contactId: number) { }
}

export class Notify {
  static readonly type = '[Contact App] Notify';
  constructor(public message: string) { }
}
