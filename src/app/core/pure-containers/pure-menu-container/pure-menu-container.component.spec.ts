import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';

// Pure Components
import { PureMenuContainer } from './pure-menu-container.component';
import { PureMenu } from '../../pure-components/pure-menu/pure-menu.component';

// Pure Services
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsStorageService } from '../../pure-services/pure-settings.storage';
import { PureSettingsService } from '../../pure-services/pure-settings.service';

describe('PureMenuContainer', () => {
  let component: PureMenuContainer;
  let fixture: ComponentFixture<PureMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [
        PureMenuContainer,
        PureMenu
      ],
      providers: [
        PureMenuContainerService,
        PureSettingsStorageService,
        PureSettingsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenuContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
