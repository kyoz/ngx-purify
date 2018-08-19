import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../../shared/shared.module';

// Pure Components
import { PureMenuContainer } from './pure-menu-container.component';

// Pure Services
import { PureMenuContainerService } from './pure-menu-container.service';

describe('PureMenuContainer', () => {
  let component: PureMenuContainer;
  let fixture: ComponentFixture<PureMenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureMenuContainer],
      providers: [PureMenuContainerService]
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
