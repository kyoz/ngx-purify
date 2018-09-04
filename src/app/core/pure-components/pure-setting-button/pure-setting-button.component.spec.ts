import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSettingButton } from './pure-setting-button.component';
import { PureCoreModule } from '../../core.module';

describe('PureSettingButton', () => {
  let component: PureSettingButton;
  let fixture: ComponentFixture<PureSettingButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSettingButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
