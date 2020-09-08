import { TestBed, inject,fakeAsync,tick  } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { ContenttypeService } from './contenttype.service';

describe('ContenttypeService', () => {
  let service: ContenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContenttypeService]

    });
    service = TestBed.inject(ContenttypeService);
  });

  it('should be created', inject([ContenttypeService], (service: ContenttypeService) => {
    expect(service).toBeTruthy();
  }));
});
