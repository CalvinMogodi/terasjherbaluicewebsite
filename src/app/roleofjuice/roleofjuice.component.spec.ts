import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleofjuiceComponent } from './roleofjuice.component';

describe('RoleofjuiceComponent', () => {
  let component: RoleofjuiceComponent;
  let fixture: ComponentFixture<RoleofjuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleofjuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleofjuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
