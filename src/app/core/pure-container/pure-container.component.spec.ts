import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../shared/shared.module';

// Pure Components
import { PureContainer } from './pure-container.component';
import { PureSideMenu } from '../pure-side-menu/pure-side-menu.component';
import { PureSideChatbox } from '../pure-side-chatbox/pure-side-chatbox.component';
import { PureSideNotification } from '../pure-side-notification/pure-side-notification.component';

// Pure Services
import { PureSideMenuService } from '../pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from '../pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from '../pure-side-notification/pure-side-notification.service';
import { PureChatbox } from '../pure-side-chatbox/pure-chatbox/pure-chatbox.component';

describe('PureContainer', () => {
  let component: PureContainer;
  let fixture: ComponentFixture<PureContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureSharedModule
      ],
      declarations: [
        PureContainer,
        PureSideMenu,
        PureSideChatbox,
        PureSideNotification,
        PureChatbox
      ],
      providers: [
        PureSideMenuService,
        PureSideChatboxService,
        PureSideNotificationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
