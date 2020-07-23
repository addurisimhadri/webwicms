import { TestBed } from '@angular/core/testing';

import { ContenttypeService } from './contenttype.service';

describe('ContenttypeService', () => {
  let service: ContenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
