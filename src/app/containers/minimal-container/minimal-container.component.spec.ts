import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalContainer } from './minimal-container.component';

describe('MinimalContainer', () => {
  let component: MinimalContainer;
  let fixture: ComponentFixture<MinimalContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
