import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PureChatboxContainer } from './pure-chatbox-container.component';
import { PureCoreModule } from '../../core.module';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/core.module';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('PureChatboxContainer', () => {
  let component: PureChatboxContainer;
  let fixture: ComponentFixture<PureChatboxContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureCoreModule,
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
