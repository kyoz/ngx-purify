import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';
import { Observable } from 'rxjs';
import { CONTACTS } from '../data/contacts';

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
      observer.next(this.contacts.filter(d => d.favorite && d.favorite === true));
      observer.complete();
    });
  }

  public getFrequentlyContacts(): Observable<Contact[]> {
    return new Observable(observer => {
      observer.next(this.contacts.slice(0, 8));
      observer.complete();
    });
  }
}
