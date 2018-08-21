import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSideChatbox } from './pure-side-chatbox.component';
import { PureSharedModule } from '../../../shared/shared.module';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

describe('PureSideChatbox', () => {
  let component: PureSideChatbox;
  let fixture: ComponentFixture<PureSideChatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureSideChatbox],
      providers: [PureMockApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideChatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
