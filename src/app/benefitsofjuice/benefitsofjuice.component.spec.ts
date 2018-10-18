import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsofjuiceComponent } from './benefitsofjuice.component';

describe('BenefitsofjuiceComponent', () => {
  let component: BenefitsofjuiceComponent;
  let fixture: ComponentFixture<BenefitsofjuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsofjuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsofjuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
