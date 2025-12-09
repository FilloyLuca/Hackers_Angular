import { TestBed } from '@angular/core/testing';

import { ManagerHacker } from './manager-hacker';

describe('ManagerHacker', () => {
  let service: ManagerHacker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerHacker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
