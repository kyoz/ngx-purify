import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ContactAppService } from './contact.service';
import { Contact } from '../../../shared/models/contact.model';
import { ContactAppInfoDialog } from './contact-info/contact-info.dialog';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactApp implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;
  @ViewChild('contactsWrapper', { static: false }) contactContentScrollbar?: PerfectScrollbarDirective;

  searchTerm$ = new BehaviorSubject<string>('');

  isOpenedSidenav = true;
  isOpenedMobileSidenav = false;
  isMobileSearching = false;

  displayColumns = ['select', 'avatar', 'firstName', 'email', 'phone', 'job', 'functions'];
  selection = new SelectionModel<Contact>(true, []);
  dataSource = new MatTableDataSource([]);

  constructor(
    public _settings: PureSettingsService,
    public _contact: ContactAppService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._contact.contacts$.subscribe(res => {
      this.dataSource.data = res ? [...res] : [];
      this.dataSource.sort = this.sort;

      // Reset search input & selections
      if (this.searchInput) {
        this.searchInput.nativeElement.value = '';
      }

      // Clear selection
      this.selection.clear();

      this._changeDetectorRef.detectChanges();
    });

    this._contact.dataType$.subscribe(() => {
      // Scroll table to top when user change data list. This is just for example purpose
      // For real application, this must base on your real api response
      // You can adjust Notify Action for your need
      setTimeout(() => {
        this.scrollTableToTop();
      }, 100);
    });

    this._contact.notify$.subscribe(notify => {
      if (notify && notify.message && notify.message.length > 0) {
        this._snackBar.open(notify.message, 'OK', { duration: 3000 });
      }
    });

    this.searchTerm$.pipe(distinctUntilChanged()).subscribe((searchTerm: string) => {
      this.dataSource.filter = searchTerm ? searchTerm.trim().toLowerCase() : '';
    });
  }

  onTableRowClick(contact: Contact) {
    this.openInfoDialog('update', contact);
  }

  createNewContact() {
    this.openInfoDialog('create');
  }

  openInfoDialog(type: 'create' | 'update', contact: Contact = null) {
    const dialogRef = this._dialog.open(ContactAppInfoDialog, {
      autoFocus: false,
      width: '480px',
      height: '860px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'mat-dialog-no-padding',
      data: { type, contact }
    });

    dialogRef.afterClosed().subscribe(res => {
      const action = res && res.action || '';

      switch (action) {
        case 'create':
          this._contact.createContact(res.contact);
          break;
        case 'update':
          this._contact.updateContact(res.contact);
          break;
        case 'remove':
          this._contact.removeContact(res.contact.id);
          break;
      }
    });
  }

  removeContact(contactId: number) {
    this._contact.removeContact(contactId);
  }

  removeSelectedContact() {
    this._contact.removeContacts(this.selection.selected);
  }

  toggleFavorite(contact: Contact) {
    if (contact.favorite) {
      this._contact.unfavoriteContact(contact.id);
    } else {
      this._contact.favoriteContact(contact.id);
    }
  }

  toggleSidenav() {
    this.isOpenedSidenav = !this.isOpenedSidenav;
    this.isOpenedMobileSidenav = !this.isOpenedMobileSidenav;
  }

  toggleMobileSearch() {
    this.isMobileSearching = !this.isMobileSearching;

    if (this.isMobileSearching) {
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.nativeElement.focus();
        }
      }, 200);
    } else {
      this.dataSource.filter = '';
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectAll() {
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deselectAll() {
    this.selection.clear();
  }

  scrollTableToTop() {
    if (this.contactContentScrollbar) {
      this.contactContentScrollbar.update();
      this.contactContentScrollbar.scrollToTop();
    }
  }

  preventClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  trackById(index: number, contact: Contact) {
    return contact.id;
  }
}
