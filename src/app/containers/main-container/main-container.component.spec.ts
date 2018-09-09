import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core/core.module';
import { MainContainer } from './main-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStateModule } from '../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureChatboxEffects } from '../../core/pure-components/pure-chatbox/pure-chatbox.effect';

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
        ])
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
