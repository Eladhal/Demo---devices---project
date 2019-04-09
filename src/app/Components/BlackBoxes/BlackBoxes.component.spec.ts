import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBoxes } from './BlackBoxes.component';

describe('SelectBBComponent', () => {
  let component: BlackBoxes;
  let fixture: ComponentFixture<BlackBoxes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBoxes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBoxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
