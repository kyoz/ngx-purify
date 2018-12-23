export const html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Assignee to" aria-label="Assignee to" matInput [formControl]="optionCtrl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option.name}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
`;

export const ts = `
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'display-value-autocomplete-example',
  templateUrl: './display-value-autocomplete-example.html',
  styleUrls: ['./display-value-autocomplete-example.scss']
})
export class DisplayValueAutocompleteExample implements OnInit {
  optionCtrl = new FormControl();
  options: User[] = [
    { name: 'Kyoz' },
    { name: 'Josh' },
    { name: 'Sai' }
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.optionCtrl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
`;

export const scss = `
.example-form {
  width: 100%;
  min-width: 150px;
  max-width: 500px;

  .example-full-width {
    width: 100%;
  }
}
`;
