export class GetContacts {
  static readonly type = '[Contact App] Get Contacts';
  constructor(public type: 'all' | 'favorite' | 'frequently') { }
}
