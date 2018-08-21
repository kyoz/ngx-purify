import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureNotification } from './pure-notification.component';
import { PureSharedModule } from '../../../shared/shared.module';

describe('PureNotification', () => {
  let component: PureNotification;
  let fixture: ComponentFixture<PureNotification>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureNotification]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
