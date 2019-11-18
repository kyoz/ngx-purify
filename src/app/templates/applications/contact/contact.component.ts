import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ContactAppService } from './contact.service';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactApp implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  isOpenedSidenav = true;

  displayColumns = ['select', 'position', 'name'];
  selection = new SelectionModel<Contact>(true, []);
  dataSource = new MatTableDataSource([]);

  constructor(
    public _settings: PureSettingsService,
    public _contact: ContactAppService
  ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this._contact.contacts$.subscribe(res => {
      console.log(res);
    });

    this._contact.getContacts('all');
  }

  toggleSidenav() {
    this.isOpenedSidenav = !this.isOpenedSidenav;
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
}
