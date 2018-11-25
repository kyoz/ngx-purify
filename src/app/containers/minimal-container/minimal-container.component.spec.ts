import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PureCoreModule } from '../../core/core.module';
import { MinimalContainer } from './minimal-container.component';

import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('MinimalContainer', () => {
  let component: MinimalContainer;
  let fixture: ComponentFixture<MinimalContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MinimalContainer
      ],
      imports: [
        PureCoreModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(MinimalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
