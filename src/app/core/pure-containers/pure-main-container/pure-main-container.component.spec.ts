import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureMainContainer } from './pure-main-container.component';
import { PureCoreModule } from '../../core.module';
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from '../../../app-state.module';
import { PureChatboxEffects } from '../../pure-components/pure-chatbox/pure-chatbox.effect';

describe('PureMainContainer', () => {
  let component: PureMainContainer;
  let fixture: ComponentFixture<PureMainContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PureCoreModule,
        AppStateModule,
        EffectsModule.forRoot([
          PureChatboxEffects
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
