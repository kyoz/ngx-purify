import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { NgxsModule } from '@ngxs/store';

// Components
import { PureChatbox } from './pure-chatbox.component';

// Services
import { PureChatboxService } from './pure-chatbox.service';

describe('PureChatbox', () => {
  let component: PureChatbox;
  let fixture: ComponentFixture<PureChatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([]),
        PureCoreModule
      ],
      providers: [
        PureChatboxService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureChatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
