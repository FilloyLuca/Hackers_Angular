import { TestBed } from '@angular/core/testing';

import { LookupIp } from './lookup-ip';

describe('LookupIp', () => {
  let service: LookupIp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupIp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
