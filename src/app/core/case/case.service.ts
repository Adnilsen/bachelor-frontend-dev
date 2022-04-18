import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../../shared/interfaces/case.interface';
import {Product} from "../../shared/interfaces/product.interface";
import {Customer} from "../../shared/interfaces/customer.interface";

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  constructor(private httpClient: HttpClient) {}

  getCases() {
    return this.httpClient.get<Case[]>('http://localhost:8080/cases');
  }

  getMockCases() {
    return [{
      caseId: 133,
      status: "Klar til å fortsette",
      amount: 2_500_000,
      finished: true,
      date: new Date(),
      product: {
        type: "Finansieringsbevis bolig",
        name: "Finansieringsbevis bolig",
        description: "Bra finbev",
        id: 1
      } as Product,
      customer: {
        role: "owner",
        customerFirstName: "Kari",
        customerLastName: "Normann",
        id: 123,
      } as Customer,
      gatheredDebt: 200000,
      totalEquity: 500000
    },
      {
        caseId: 133,
        status: "Klar til å fortsette",
        amount: 10_000_000,
        finished: true,
        date: new Date(),
        product: {
          type: "Finansieringsbevis bolig",
          name: "Finansieringsbevis bolig",
          description: "Bra finbev",
          id: 1
        } as Product,
        customer: {
          role: "owner",
          customerFirstName: "Kari",
          customerLastName: "Normann",
          id: 111,
        } as Customer,
        gatheredDebt: 200000,
        totalEquity: 3000000
      }] as Case[]
  }
}
