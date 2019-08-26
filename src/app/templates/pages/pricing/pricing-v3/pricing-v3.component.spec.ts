import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingV3Component } from './pricing-v3.component';

describe('PricingV3Component', () => {
  let component: PricingV3Component;
  let fixture: ComponentFixture<PricingV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
