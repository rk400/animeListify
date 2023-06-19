import { TestBed } from '@angular/core/testing';

import { TopAnimeScrappingService } from './top-anime-scrapping.service';

describe('TopAnimeScrappingService', () => {
  let service: TopAnimeScrappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopAnimeScrappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
