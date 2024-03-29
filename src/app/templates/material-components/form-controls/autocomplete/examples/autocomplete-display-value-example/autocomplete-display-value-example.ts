import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'autocomplete-display-value-example',
  templateUrl: './autocomplete-display-value-example.html',
  styleUrls: ['./autocomplete-display-value-example.scss']
})
export class AutocompleteDisplayValueExample implements OnInit {
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
