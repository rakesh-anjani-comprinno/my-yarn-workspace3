import { TestBed } from '@angular/core/testing';

import { MyLibraryAService } from './my-library-a.service';

describe('MyLibraryAService', () => {
  let service: MyLibraryAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibraryAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
