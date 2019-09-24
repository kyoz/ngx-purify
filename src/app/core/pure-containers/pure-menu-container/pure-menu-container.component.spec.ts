import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PureCoreModule } from '../../core.module';
import { PureMenuContainer } from './pure-menu-container.component';

describe('PureMenuContainer', () => {
  let component: PureMenuContainer;
  let fixture: ComponentFixture<PureMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PureCoreModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenuContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
