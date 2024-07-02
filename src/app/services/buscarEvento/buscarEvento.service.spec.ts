import { TestBed } from '@angular/core/testing';

import { BuscarEventoService } from './buscarEvento.service';

describe('BuscarEventoService', () => {
  let service: BuscarEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
