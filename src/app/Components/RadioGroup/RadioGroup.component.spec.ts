import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroup } from './RadioGroup.component';

describe('SelectTimePeriodComponent', () => {
  let component: RadioGroup;
  let fixture: ComponentFixture<RadioGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
