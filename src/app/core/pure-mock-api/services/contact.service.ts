import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';
import { Observable } from 'rxjs';
import { CONTACTS, FREQUENTLY_CONTACT_IDS } from '../data/contacts';

// This is just an mockup api, so there's some trick i'v used to updated data
// In real app, all you have to do is replace this with your real api

@Injectable()
export class ContactMockApiService {

  // Assume this data that you got from server
  private contacts: Contact[] = Array.from(CONTACTS);

  private generateNewId() {
    let maxId = 0;

    for (const contact of this.contacts) {
      if (maxId < contact.id) {
        maxId = contact.id;
      }
    }

    return ++maxId;
  }

  public getContacts(): Observable<Contact[]> {
    return new Observable(observer => {
      observer.next(this.contacts);
      observer.complete();
    });
  }

  public getFavoriteContacts(): Observable<Contact[]> {
    return new Observable(observer => {
      observer.next(this.contacts.filter(contact => contact.favorite && contact.favorite === true));
      observer.complete();
    });
  }

  public getFrequentlyContacts(): Observable<Contact[]> {
    return new Observable(observer => {
      observer.next(this.contacts.filter(contact => FREQUENTLY_CONTACT_IDS.indexOf(contact.id) !== -1));
      observer.complete();
    });
  }

  public createContact(newContact: Contact) {
    const newId = this.generateNewId();
    const contacts = [...this.contacts];

    newContact.id = newId;

    return new Observable(observer => {

      contacts.push(newContact);

      this.contacts = contacts;

      observer.next();
      observer.complete();
    });
  }

  public updateContact(updatedContact: Contact) {
    return new Observable(observer => {
      const updatedContacts = [];

      for (const contact of this.contacts) {
        if (contact.id === updatedContact.id) {
          const newContact = Object.assign({}, contact);

          newContact.firstName = updatedContact.firstName;
          newContact.lastName = updatedContact.lastName;
          newContact.nickName = updatedContact.nickName;
          newContact.gender = updatedContact.gender;
          newContact.birthday = updatedContact.birthday;
          newContact.address = updatedContact.address;
          newContact.email = updatedContact.email;
          newContact.phone = updatedContact.phone;
          newContact.company = updatedContact.company;
          newContact.job = updatedContact.job;
          newContact.description = updatedContact.description;
          newContact.favorite = contact.favorite;

          updatedContacts.push(newContact);
        } else {
          updatedContacts.push(contact);
        }
      }

      this.contacts = updatedContacts;

      observer.next();
      observer.complete();
    });
  }

  public removeContact(contactId: number) {
    return new Observable(observer => {
      this.contacts = this.contacts.filter(contact => contact.id !== contactId);

      observer.next();
      observer.complete();
    });
  }

  public removeContacts(contacts: Contact[]) {
    return new Observable(observer => {
      this.contacts = this.contacts.filter(contact => {
        const removeContactIds = contacts.map(d => d.id);
        return removeContactIds.indexOf(contact.id) === -1;
      });

      observer.next();
      observer.complete();
    });
  }

  public favoriteContact(contactId: number) {
    return new Observable(observer => {
      const updatedContacts = [];

      for (const contact of this.contacts) {
        if (contact.id === contactId) {
          const newContact = Object.assign({}, contact);
          newContact.favorite = true;
          updatedContacts.push(newContact);
        } else {
          updatedContacts.push(contact);
        }
      }

      this.contacts = updatedContacts;

      observer.next();
      observer.complete();
    });
  }

  public unfavoriteContact(contactId: number) {
    return new Observable(observer => {
      const updatedContacts = [];

      for (const contact of this.contacts) {
        if (contact.id === contactId) {
          const newContact = Object.assign({}, contact);
          newContact.favorite = false;
          updatedContacts.push(newContact);
        } else {
          updatedContacts.push(contact);
        }
      }

      this.contacts = updatedContacts;

      observer.next();
      observer.complete();
    });
  }
}
