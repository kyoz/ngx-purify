import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/templates/shared/shared.module';

import { PureMenuItem } from './pure-menu-item.component';

import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureMenuService } from '../pure-menu/pure-menu.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureSettingsStorageService } from '../../pure-services/pure-settings.storage';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/core.module';

describe('PureMenuItem', () => {
  let component: PureMenuItem;
  let fixture: ComponentFixture<PureMenuItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        MaterialModule,
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
          deps: [HttpClient]
          }
        })
      ],
      declarations: [ PureMenuItem ],
      providers: [
        PureMainContainerService,
        PureMenuContainerService,
        PureMenuService,
        PureSettingsService,
        PureSettingsStorageService,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenuItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
