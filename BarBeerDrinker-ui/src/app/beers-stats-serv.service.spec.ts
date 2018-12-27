import { TestBed } from '@angular/core/testing';

import { BeersStatsServService } from './beers-stats-serv.service';

describe('BeersStatsServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeersStatsServService = TestBed.get(BeersStatsServService);
    expect(service).toBeTruthy();
  });
});
