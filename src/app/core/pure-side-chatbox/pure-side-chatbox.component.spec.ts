import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSideChatboxComponent } from './pure-side-chatbox.component';

describe('PureSideChatboxComponent', () => {
  let component: PureSideChatboxComponent;
  let fixture: ComponentFixture<PureSideChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSideChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
