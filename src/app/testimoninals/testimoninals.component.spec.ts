import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoninalsComponent } from './testimoninals.component';

describe('TestimoninalsComponent', () => {
  let component: TestimoninalsComponent;
  let fixture: ComponentFixture<TestimoninalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoninalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoninalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
