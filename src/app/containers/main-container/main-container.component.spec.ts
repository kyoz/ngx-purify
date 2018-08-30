import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainer } from './main-container.component';

describe('MainContainer', () => {
  let component: MainContainer;
  let fixture: ComponentFixture<MainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
