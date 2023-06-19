import { TestBed } from '@angular/core/testing';

import { AnimeAPIService } from './anime-api.service';

describe('AnimeAPIService', () => {
  let service: AnimeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
