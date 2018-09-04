import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureMainContainer } from './pure-main-container.component';
import { PureCoreModule } from '../../core.module';
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from '../../../app-state.module';
import { PureSideChatboxEffects } from '../../pure-components/pure-side-chatbox/pure-side-chatbox.effect';

describe('PureMainContainer', () => {
  let component: PureMainContainer;
  let fixture: ComponentFixture<PureMainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureCoreModule,
        AppStateModule,
        EffectsModule.forRoot([
          PureSideChatboxEffects
        ])
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
