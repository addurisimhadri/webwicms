import { TestBed } from '@angular/core/testing';

import { ContentproviderService } from './contentprovider.service';

describe('ContentproviderService', () => {
  let service: ContentproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
