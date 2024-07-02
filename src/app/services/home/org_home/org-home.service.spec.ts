import { TestBed } from '@angular/core/testing';

import { OrgHomeService } from './org-home.service';

describe('OrgHomeService', () => {
  let service: OrgHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
