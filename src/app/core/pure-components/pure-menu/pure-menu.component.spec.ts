import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { PureSharedModule } from '../../../shared/shared.module';

import { PureMenu } from './pure-menu.component';
import { PureMenuItem } from '../pure-menu-item/pure-menu-item.component';
import { PurePerfectScrollbarDirective } from '../../pure-directives/perfect-scrollbar.directive';

import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { PureMenuService } from './pure-menu.service';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureSettingsStorageService } from '../../pure-services/pure-settings.storage';
import { DeviceDetectorService } from 'ngx-device-detector';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

describe('PureMenu', () => {
  let component: PureMenu;
  let fixture: ComponentFixture<PureMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureSharedModule,
        HttpClientModule,
        BrowserDynamicTestingModule,
        RouterTestingModule,

        // Translator
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        PureMenu,
        PureMenuItem,
        PurePerfectScrollbarDirective
      ],
      providers: [
        PureMainContainerService,
        PureMenuService,
        PureMenuContainerService,
        PureSettingsService,
        PureSettingsStorageService,
        DeviceDetectorService,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
