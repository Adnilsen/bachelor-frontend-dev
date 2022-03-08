import { TestBed } from '@angular/core/testing';

import { BrokerService } from './broker.service';

import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('BrokerService', () => {
  let service: BrokerService;
  let httpMock : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BrokerService);
    httpMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
