import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';
import { PureNotificationContainer } from './pure-notification-container.component';
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureNotification } from '../../pure-components/pure-notification/pure-notification.component';

describe('PureNotificationContainer', () => {
  let component: PureNotificationContainer;
  let fixture: ComponentFixture<PureNotificationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [
        PureNotificationContainer,
        PureNotification
      ],
      providers: [PureNotificationContainerService]
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
