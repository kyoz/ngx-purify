import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

// Pure Components
import { PureMenuContainer } from './pure-menu-container.component';
import { PureMenu } from '../../pure-components/pure-menu/pure-menu.component';
import { PureMenuItem } from '../../pure-components/pure-menu-item/pure-menu-item.component';

// Pure Services
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureMenuService } from '../../pure-components/pure-menu/pure-menu.service';
import { PureSettingsStorageService } from '../../pure-services/pure-settings.storage';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';

// Pure Directives
import { PurePerfectScrollbarDirective } from '../../pure-directives/perfect-scrollbar.directive';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

describe('PureMenuContainer', () => {
  let component: PureMenuContainer;
  let fixture: ComponentFixture<PureMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PureSharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        PureMenuContainer,
        PureMenu,
        PureMenuItem,
        PurePerfectScrollbarDirective
      ],
      providers: [
        PureMainContainerService,
        PureMenuContainerService,
        PureMenuService,
        PureSettingsStorageService,
        PureSettingsService,
        DeviceDetectorService,
        TranslateService
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
