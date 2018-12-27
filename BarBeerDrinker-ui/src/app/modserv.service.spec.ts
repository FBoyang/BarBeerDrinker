import { TestBed } from '@angular/core/testing';

import { ModservService } from './modserv.service';

describe('ModservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModservService = TestBed.get(ModservService);
    expect(service).toBeTruthy();
  });
});
