import { TestBed } from '@angular/core/testing';

import { LoginsharedService } from './loginshared.service';

describe('LoginsharedService', () => {
  let service: LoginsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
