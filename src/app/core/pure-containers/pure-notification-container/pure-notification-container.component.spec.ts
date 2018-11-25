import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Pure Components
import { PureNotificationContainer } from './pure-notification-container.component';
import { PureNotification } from '../../pure-components/pure-notification/pure-notification.component';

// Pure Services
import { PureNotificationContainerService } from './pure-notification-container.service';
import { PureSettingsStorageService } from '../../pure-services/pure-settings.storage';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

describe('PureNotificationContainer', () => {
  let component: PureNotificationContainer;
  let fixture: ComponentFixture<PureNotificationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
        PureNotificationContainer,
        PureNotification
      ],
      providers: [
        PureNotificationContainerService,
        PureSettingsStorageService,
        PureSettingsService,
        DeviceDetectorService,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureNotificationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
