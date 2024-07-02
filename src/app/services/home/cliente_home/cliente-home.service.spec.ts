import { TestBed } from '@angular/core/testing';

import { ClienteHomeService } from './cliente-home.service';

describe('ClienteHomeService', () => {
  let service: ClienteHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
