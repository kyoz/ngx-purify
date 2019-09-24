import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureChatboxContainer } from './pure-chatbox-container.component';

describe('PureChatboxContainer', () => {
  let component: PureChatboxContainer;
  let fixture: ComponentFixture<PureChatboxContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureCoreModule]
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
