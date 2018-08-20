import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureChatbox } from './pure-chatbox.component';
import { PureSharedModule } from '../../../shared/shared.module';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

describe('PureChatbox', () => {
  let component: PureChatbox;
  let fixture: ComponentFixture<PureChatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureChatbox],
      providers: [PureMockApiService]
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
