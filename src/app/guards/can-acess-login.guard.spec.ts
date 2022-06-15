import { TestBed } from '@angular/core/testing';

import { CanAcessLoginGuard } from './can-acess-login.guard';

describe('CanAcessLoginGuard', () => {
  let guard: CanAcessLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAcessLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
