import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureNotificationContainer } from './pure-notification-container.component';

describe('PureNotificationContainer', () => {
  let component: PureNotificationContainer;
  let fixture: ComponentFixture<PureNotificationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureNotificationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
