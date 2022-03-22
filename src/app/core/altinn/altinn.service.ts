import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collateral } from '../../shared/interfaces/collateral.interface';

@Injectable({
  providedIn: 'root',
})
export class AltinnService {
  constructor(private httpClient: HttpClient) {}

  getAltinnData(brokerId: number, uderId: number) {
    return this.httpClient.get<Collateral>('http://localhost:8080/contract/broker/1/socialSecNumber/12049500339');
  }
}
