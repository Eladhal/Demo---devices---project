import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableCheckboxesGroup } from './CollapsableCheckboxesGroup.component';

describe('BlackBoxComponent', () => {
  let component: CollapsableCheckboxesGroup;
  let fixture: ComponentFixture<CollapsableCheckboxesGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableCheckboxesGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableCheckboxesGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
