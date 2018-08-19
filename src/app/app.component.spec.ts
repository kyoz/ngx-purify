import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PureSharedModule } from './shared/shared.module';

// Pure Components
import { PureContainer } from './core/pure-container/pure-container.component';
import { PureSideMenu } from './core/pure-side-menu/pure-side-menu.component';
import { PureSideChatbox } from './core/pure-side-chatbox/pure-side-chatbox.component';
import { PureSideNotification } from './core/pure-side-notification/pure-side-notification.component';

// Pure Services
import { PureSideMenuService } from './core/pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from './core/pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from './core/pure-side-notification/pure-side-notification.service';
import { PureChatbox } from './core/pure-side-chatbox/pure-chatbox/pure-chatbox.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,

        // Pure Components
        PureContainer,
        PureSideMenu,
        PureSideChatbox,
        PureSideNotification,
        PureChatbox
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        PureSharedModule
      ],
      providers: [
        PureSideMenuService,
        PureSideChatboxService,
        PureSideNotificationService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
