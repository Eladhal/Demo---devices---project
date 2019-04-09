import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRowComponent } from './checkbox-row.component';

describe('CheckboxRowComponent', () => {
  let component: CheckboxRowComponent;
  let fixture: ComponentFixture<CheckboxRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
