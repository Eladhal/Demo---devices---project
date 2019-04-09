import { TestBed, inject } from '@angular/core/testing';

import { CurrentlearningStateService } from './currentlearning-state.service';

describe('CurrentlearningStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentlearningStateService]
    });
  });

  it('should be created', inject([CurrentlearningStateService], (service: CurrentlearningStateService) => {
    expect(service).toBeTruthy();
  }));
});
