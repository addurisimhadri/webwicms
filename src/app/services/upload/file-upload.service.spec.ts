import { TestBed, ComponentFixture ,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FileUploadService } from './file-upload.service';

describe('FileUploadService', () => {
  let service: FileUploadService;
  let fixture: ComponentFixture<FileUploadService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadService],
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(FileUploadService);
  });

  it('should be created',inject([FileUploadService], (service: FileUploadService) => {
    expect(service).toBeTruthy();
  }));
});
