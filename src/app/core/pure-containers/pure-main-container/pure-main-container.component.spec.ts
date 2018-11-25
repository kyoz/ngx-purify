import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PureCoreModule } from '../../core.module';
import { PureMainContainer } from './pure-main-container.component';
import { AppStateModule } from '../../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureChatboxEffects } from '../../pure-components/pure-chatbox/pure-chatbox.effect';

import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PureSettingsService } from '../../pure-services/pure-settings.service';

describe('PureMainContainer', () => {
  let component: PureMainContainer;
  let fixture: ComponentFixture<PureMainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureCoreModule,
        AppStateModule,
        HttpClientModule,
        RouterTestingModule,
        EffectsModule.forRoot([
          PureChatboxEffects
        ]),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        DeviceDetectorService,
        TranslateService,
        PureSettingsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
