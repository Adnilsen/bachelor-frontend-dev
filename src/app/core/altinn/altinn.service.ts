import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Collateral} from '../../shared/interfaces/collateral.interface';

@Injectable({
  providedIn: 'root',
})
export class AltinnService {
  constructor(private httpClient: HttpClient) {}

  getAltinnData(brokerId: number, socialSecNumber: number) {
    console.log(brokerId)
    return this.httpClient.get<Collateral>('http://localhost:8080/contract/broker/'+brokerId+'/socialSecNumber/'+socialSecNumber);
  }

  /*getMockAltinnData(id: number) {
    if(id === 123) {
      return {
        id: 1,
        brokerId: 22,
        socialSecurityNr: 22099734456,
        purchaseDate: new Date(),
        realEstate: {
          id: 1,
          address: "Solli gata 2",
          type: "Borettslag",
          purchaseAmount: 3_000_000,
          cooperativeName: "Turten Borettslag",
          unitNumber: 23,
          sharedDebt: 120_000,
          postalCode: "0165",
          leaseNumber: 44,
          sectionNumber: 3455,
          titleNumber: 4555,
          cadastralNumber: 5666
        } as RealEstate
      } as Collateral
    } else {
      return {
        id: 1,
        brokerId: 22,
        socialSecurityNr: 22099734456,
        purchaseDate: new Date(),
        realEstate: {
          id: 1,
          address: "Akers gate 9",
          type: "Selveier",
          purchaseAmount: 10_000_000,
          cooperativeName: "Turten Borettslag",
          unitNumber: 23,
          sharedDebt: 120_000,
          postalCode: "0165",
          leaseNumber: 44,
          sectionNumber: 3455,
          titleNumber: 4555,
          cadastralNumber: 5666
        } as RealEstate
      } as Collateral
    }*/

  //}
}
