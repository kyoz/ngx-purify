import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Search } from './search.component';

describe('Search', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Search ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
