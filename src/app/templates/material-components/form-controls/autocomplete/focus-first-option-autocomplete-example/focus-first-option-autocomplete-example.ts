import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'focus-first-option-autocomplete-example',
  templateUrl: './focus-first-option-autocomplete-example.html',
  styleUrls: ['./focus-first-option-autocomplete-example.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusFirstOptionAutocompleteExample implements OnInit {
  optionCtrl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.optionCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
