import { TestBed, inject } from '@angular/core/testing';

import { CrudLocalstorageService } from './crud-localstorage.service';

describe('CrudLocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudLocalstorageService]
    });
  });

  it('should be created', inject([CrudLocalstorageService], (service: CrudLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
