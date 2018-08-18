import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PureSharedModule } from '../../shared/shared.module';

// Pure Components
import { PureSideMenu } from './pure-side-menu.component';

// Pure Services
import { PureSideMenuService } from './pure-side-menu.service';

describe('PureSideMenu', () => {
  let component: PureSideMenu;
  let fixture: ComponentFixture<PureSideMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureSharedModule],
      declarations: [PureSideMenu],
      providers: [PureSideMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
