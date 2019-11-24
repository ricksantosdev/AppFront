import { TestBed } from '@angular/core/testing';

import { DropdownlistService } from './dropdownlist.service';

describe('DropdownlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownlistService = TestBed.get(DropdownlistService);
    expect(service).toBeTruthy();
  });
});
