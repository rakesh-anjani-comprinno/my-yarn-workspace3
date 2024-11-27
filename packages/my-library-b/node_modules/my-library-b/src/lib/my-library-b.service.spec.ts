import { TestBed } from '@angular/core/testing';

import { MyLibraryBService } from './my-library-b.service';

describe('MyLibraryBService', () => {
  let service: MyLibraryBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibraryBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
