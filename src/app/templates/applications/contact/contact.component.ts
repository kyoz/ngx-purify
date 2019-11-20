import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ContactAppService } from './contact.service';
import { Contact } from '../../../shared/models/contact.model';
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

  searchTerm$ = new BehaviorSubject<string>('');

  isOpenedSidenav = true;
  isOpenedMobileSidenav = false;
  isMobileSearching = false;

  displayColumns = ['select', 'avatar', 'name', 'email', 'phone', 'job', 'functions'];
  selection = new SelectionModel<Contact>(true, []);
  dataSource = new MatTableDataSource([]);

  constructor(
    public _settings: PureSettingsService,
    public _contact: ContactAppService
  ) { }

  ngOnInit() {
    this._contact.contacts$.subscribe(res => {
      this.dataSource = new MatTableDataSource(res ? res : []);
      this.dataSource.sort = this.sort;

      // Reset search input & selections
      if (this.searchInput) {
        this.searchInput.nativeElement.value = '';
      }

      this.selection.clear();
    });

    this.searchTerm$.pipe(distinctUntilChanged()).subscribe((searchTerm: string) => {
      this.dataSource.filter = searchTerm ? searchTerm.trim().toLowerCase() : '';
    });
  }

  removeContact(id: number) {
    alert(id);
  }

  removeSelectedContact() {

  }

  favoriteContact(id: number) {

  }

  unfavoriteContact(id: number) {

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

  trackById(index: number, contact: Contact) {
    return contact.id;
  }
}
