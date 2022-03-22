import { TestBed } from '@angular/core/testing';

import { AltinnService } from './altinn.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AltinnService', () => {
  let service: AltinnService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AltinnService);
    httpMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
