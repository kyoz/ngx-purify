import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Pure Components
import { PureContainer } from './pure-container.component';
import { PureSideMenu } from '../pure-side-menu/pure-side-menu.component';

// Pure Services
import { PureSideMenuService } from '../pure-side-menu/pure-side-menu.service';

// Angular Material Modules
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

describe('PureContainer', () => {
  let component: PureContainer;
  let fixture: ComponentFixture<PureContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // Angular Material Modules
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [ 
        PureContainer,
        PureSideMenu
       ],
       providers: [PureSideMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
