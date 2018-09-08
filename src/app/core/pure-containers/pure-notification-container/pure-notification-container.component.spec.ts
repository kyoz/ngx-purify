import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';

// Pure Components
import { PureNotificationContainer } from './pure-notification-container.component';
import { PureNotification } from '../../pure-components/pure-notification/pure-notification.component';

// Pure Services
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureSettingsStorage } from '../../pure-components/pure-settings/pure-settings.storage';
import { PureSettingsService } from '../../pure-components/pure-settings/pure-settings.service';

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
      providers: [
        PureNotificationContainerService,
        PureSettingsStorage,
        PureSettingsService
      ]
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
