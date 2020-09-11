import { TestBed } from '@angular/core/testing';

import { CreateConCategoryService } from './create-con-category.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('CreateConCategoryService', () => {
  let service: CreateConCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),
      HttpClientTestingModule,
      ToastrModule.forRoot(
        )]

    });
    service = TestBed.inject(CreateConCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
