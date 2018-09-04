import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureSideChatbox } from './pure-side-chatbox.component';
import { AppStateModule } from '../../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureSideChatboxEffects } from './pure-side-chatbox.effect';

describe('PureSideChatbox', () => {
  let component: PureSideChatbox;
  let fixture: ComponentFixture<PureSideChatbox>;

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
    fixture = TestBed.createComponent(PureSideChatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
