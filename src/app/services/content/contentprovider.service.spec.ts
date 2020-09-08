import { TestBed, inject,fakeAsync,tick  } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { ContentproviderService } from './contentprovider.service';

describe('ContentproviderService', () => {
  let service: ContentproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentproviderService]
    });
    service = TestBed.inject(ContentproviderService);
  });

  it('should be created',inject([ContentproviderService], (service: ContentproviderService) => {
    expect(service).toBeTruthy();
  }));
});
