import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCoreModule } from '../../core.module';
import { PureChatbox } from './pure-chatbox.component';
import { AppStateModule } from '../../../app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { PureChatboxEffects } from './pure-chatbox.effect';

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
        ])
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
