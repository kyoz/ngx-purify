import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PureSharedModule } from './shared/shared.module';

// Pure Components
import { PureMainContainer } from './core/pure-containers/pure-main-container/pure-main-container.component';
import { PureMenuContainer } from './core/pure-containers/pure-menu-container/pure-menu-container.component';
import { PureChatboxContainer } from './core/pure-containers/pure-chatbox-container/pure-chatbox-container.component';
import { PureNotificationContainer } from './core/pure-containers/pure-notification-container/pure-notification-container.component';
import { PureSideChatbox } from './core/pure-components/pure-side-chatbox/pure-side-chatbox.component';
import { PureNotification } from './core/pure-components/pure-notification/pure-notification.component';

// Pure Services
import { PureMenuContainerService } from './core/pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from './core/pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from './core/pure-containers/pure-notification-container/pure-notification-container.service';
import { PureMockApiService } from './core/pure-mock-api/pure-mock-api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,

        // Pure Components
        PureMainContainer,
        PureMenuContainer,
        PureChatboxContainer,
        PureNotificationContainer,
        PureSideChatbox,
        PureNotification
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        PureSharedModule
      ],
      providers: [
        PureMenuContainerService,
        PureChatboxContainerService,
        PureNotificationContainerService,
        PureMockApiService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
