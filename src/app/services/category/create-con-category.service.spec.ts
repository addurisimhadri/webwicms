import { TestBed } from '@angular/core/testing';

import { CreateConCategoryService } from './create-con-category.service';

describe('CreateConCategoryService', () => {
  let service: CreateConCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateConCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
