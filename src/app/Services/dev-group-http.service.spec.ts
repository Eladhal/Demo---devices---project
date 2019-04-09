import { TestBed, inject } from '@angular/core/testing';

import { DevGroupHttpService } from './dev-group-http.service';

describe('DevGroupHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevGroupHttpService]
    });
  });

  it('should be created', inject([DevGroupHttpService], (service: DevGroupHttpService) => {
    expect(service).toBeTruthy();
  }));
});
