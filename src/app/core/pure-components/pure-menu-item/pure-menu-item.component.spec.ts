import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PureCoreModule } from '../../core.module';
import { PureMenuItem } from './pure-menu-item.component';

describe('PureMenuItem', () => {
  let component: PureMenuItem;
  let fixture: ComponentFixture<PureMenuItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PureCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenuItem);
    component = fixture.componentInstance;

    // Mock data
    component.data = { name: 'test', url: 'test/menu-item', icon: 'test' };
    component.level = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
