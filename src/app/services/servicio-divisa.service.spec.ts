import { TestBed } from '@angular/core/testing';

import { ServicioDivisaService } from './servicio-divisa.service';

describe('ServicioDivisaService', () => {
  let service: ServicioDivisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDivisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
