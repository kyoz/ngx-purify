import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../shared/shared.module';

// Pure Components
import { PureMainContainer } from './pure-main-container.component';
import { PureMenuContainer } from '../pure-menu-container/pure-menu-container.component';
import { PureSideChatbox } from '../pure-side-chatbox/pure-side-chatbox.component';
import { PureSideNotification } from '../pure-side-notification/pure-side-notification.component';

// Pure Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureSideChatboxService } from '../pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from '../pure-side-notification/pure-side-notification.service';
import { PureChatbox } from '../pure-side-chatbox/pure-chatbox/pure-chatbox.component';

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
        PureSideChatbox,
        PureSideNotification,
        PureChatbox
      ],
      providers: [
        PureMenuContainerService,
        PureSideChatboxService,
        PureSideNotificationService
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
