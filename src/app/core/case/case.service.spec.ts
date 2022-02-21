import { TestBed } from '@angular/core/testing';

import { CaseService } from './case.service';

import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CaseService', () => {
  let service: CaseService;
  let httpMock: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(CaseService);
    httpMock = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
