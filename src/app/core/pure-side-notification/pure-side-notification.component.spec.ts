import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../shared/shared.module';
import { PureSideNotification } from './pure-side-notification.component';
import { PureSideNotificationService } from './pure-side-notification.service';

describe('PureSideNotification', () => {
  let component: PureSideNotification;
  let fixture: ComponentFixture<PureSideNotification>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureSideNotification],
      providers: [PureSideNotificationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
