import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../shared/shared.module';
import { PureSideChatbox } from './pure-side-chatbox.component';
import { PureSideChatboxService } from './pure-side-chatbox.service';

describe('PureSideChatbox', () => {
  let component: PureSideChatbox;
  let fixture: ComponentFixture<PureSideChatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureSideChatbox],
      providers: [PureSideChatboxService]
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
