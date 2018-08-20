import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';

// Pure Components
import { PureMainContainer } from './pure-main-container.component';
import { PureMenuContainer } from '../pure-menu-container/pure-menu-container.component';
import { PureChatboxContainer } from '../pure-chatbox-container/pure-chatbox-container.component';
import { PureNotificationContainer } from '../pure-notification-container/pure-notification-container.component';

// Pure Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { PureChatbox } from '../../pure-components/pure-chatbox/pure-chatbox.component';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

describe('PureMainContainer', () => {
  let component: PureMainContainer;
  let fixture: ComponentFixture<PureMainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureSharedModule
      ],
      declarations: [
        PureMainContainer,
        PureMenuContainer,
        PureChatboxContainer,
        PureNotificationContainer,
        PureChatbox
      ],
      providers: [
        PureMenuContainerService,
        PureChatboxContainerService,
        PureNotificationContainerService,
        PureMockApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
