import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { AppStateModule } from '../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureCoreModule } from '../../core/core.module';

import { MainContainer } from './main-container.component';

import { PureChatboxEffects } from '../../core/pure-components/pure-chatbox/pure-chatbox.effect';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/core.module';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('MainContainer', () => {
  let component: MainContainer;
  let fixture: ComponentFixture<MainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainContainer],
      imports: [
        PureCoreModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(MainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
