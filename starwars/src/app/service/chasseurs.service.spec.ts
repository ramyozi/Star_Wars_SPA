import { TestBed } from '@angular/core/testing';

import { ChasseursService } from './chasseurs.service';

describe('ChasseursService', () => {
  let service: ChasseursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChasseursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
