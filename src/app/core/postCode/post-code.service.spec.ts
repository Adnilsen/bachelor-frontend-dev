import { TestBed } from '@angular/core/testing';
import { PostCodeService } from './post-code.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('PostCodeService', () => {
  let service: PostCodeService;
  let httpMock: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(PostCodeService);
    httpMock = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
