import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnRowComponent } from './radio-btn-row.component';

describe('RadioBtnRowComponent', () => {
  let component: RadioBtnRowComponent;
  let fixture: ComponentFixture<RadioBtnRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBtnRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBtnRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
