import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { PureCoreModule } from '../../../core/core.module';
import { PureSharedModule} from '../../../shared/shared.module';

// Components
import { MessengerApp } from './messenger.component';
import { MessengerAppStatus } from './messenger-status.component';

// Services
import { PureChatboxService } from '../../../core/pure-components/pure-chatbox/pure-chatbox.service';
import { MessengerAppService } from './messenger.service';

describe('MessengerComponent', () => {
  let component: MessengerApp;
  let fixture: ComponentFixture<MessengerApp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(),
        PureCoreModule,
        PureSharedModule
      ],
      declarations: [
        MessengerApp,
        MessengerAppStatus
      ],
      providers: [
        PureChatboxService,
        MessengerAppService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
