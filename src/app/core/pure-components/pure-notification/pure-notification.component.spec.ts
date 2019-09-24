import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureNotification } from './pure-notification.component';

describe('PureNotification', () => {
  let component: PureNotification;
  let fixture: ComponentFixture<PureNotification>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
