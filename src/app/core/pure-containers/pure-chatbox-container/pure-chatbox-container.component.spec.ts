import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PureChatboxContainer } from './pure-chatbox-container.component';
import { PureCoreModule } from '../../core.module';
import { AppStateModule } from '../../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureChatboxEffects } from '../../pure-components/pure-chatbox/pure-chatbox.effect';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('PureChatboxContainer', () => {
  let component: PureChatboxContainer;
  let fixture: ComponentFixture<PureChatboxContainer>;

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
            deps: [ HttpClient ]
          }
        })
      ],
      providers: [ TranslateService, DeviceDetectorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureChatboxContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
