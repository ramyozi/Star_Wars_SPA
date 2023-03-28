import { TestBed } from '@angular/core/testing';

import { InMemoryData2Service } from './in-memory-data2.service';

describe('InMemoryData2Service', () => {
  let service: InMemoryData2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryData2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
