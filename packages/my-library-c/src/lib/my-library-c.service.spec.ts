import { TestBed } from '@angular/core/testing';

import { MyLibraryCService } from './my-library-c.service';

describe('MyLibraryCService', () => {
  let service: MyLibraryCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibraryCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
