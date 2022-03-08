import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../../shared/interfaces/case.interface';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  constructor(private httpClient: HttpClient) {}

  getCases() {
    return this.httpClient.get<Case[]>('http://localhost:8080/cases');
  }
}
