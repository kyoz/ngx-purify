import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';
import { PureChatboxContainer } from './pure-chatbox-container.component';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import { PureSideChatbox } from '../../pure-components/pure-side-chatbox/pure-side-chatbox.component';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

describe('PureChatboxContainer', () => {
  let component: PureChatboxContainer;
  let fixture: ComponentFixture<PureChatboxContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [
        PureChatboxContainer,
        PureSideChatbox
      ],
      providers: [
        PureChatboxContainerService,
        PureMockApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureChatboxContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
