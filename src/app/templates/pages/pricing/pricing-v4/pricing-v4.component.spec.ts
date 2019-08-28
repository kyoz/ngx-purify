import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingV4Component } from './pricing-v4.component';

describe('PricingV4Component', () => {
  let component: PricingV4Component;
  let fixture: ComponentFixture<PricingV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
