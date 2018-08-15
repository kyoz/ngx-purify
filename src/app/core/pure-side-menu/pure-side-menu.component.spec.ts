import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Pure Components
import { PureSideMenu } from './pure-side-menu.component';

// Pure Services
import { PureSideMenuService } from './pure-side-menu.service';

// Angular Material Modules
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

describe('PureSideMenu', () => {
  let component: PureSideMenu;
  let fixture: ComponentFixture<PureSideMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // Angular Material Modules
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
      ],
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
