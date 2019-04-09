import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Protocols } from './Protocols.component';

describe('SelectProtocolsComponent', () => {
  let component: Protocols;
  let fixture: ComponentFixture<Protocols>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Protocols ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Protocols);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
