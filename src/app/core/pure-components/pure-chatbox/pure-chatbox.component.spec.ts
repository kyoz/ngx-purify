import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { HttpClient } from '@angular/common/http';

import { AppStateModule } from '../../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureChatboxEffects } from './pure-chatbox.effect';
import { PureChatbox } from './pure-chatbox.component';

import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/core.module';

describe('PureChatbox', () => {
  let component: PureChatbox;
  let fixture: ComponentFixture<PureChatbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureCoreModule,
        AppStateModule,
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
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureChatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
