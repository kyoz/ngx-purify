import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureSettingButton } from './pure-setting-button.component';

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
