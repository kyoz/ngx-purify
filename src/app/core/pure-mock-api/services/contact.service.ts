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
