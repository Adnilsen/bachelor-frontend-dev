import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  startHousingLoan(caseId: number) {
    return this.httpClient.get<Case>('http://localhost:8080/cases/' + caseId);
  }

  updateCase(caseItem: Case, loanType: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Response-Type': 'text'
      })
    };
    return this.httpClient.post<string>('http://localhost:8080/cases/updateApplication/' + loanType, JSON.stringify(caseItem), httpOptions);
  }

  getMockCases() {
    return [{
      caseId: 133,
      status: "Klar til å fortsette",
      loanAmount: 2_500_000,
      purchaseAmount: 3000000,
      finished: true,
      income: 1,
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
      debt: 200000,
      equity: 500000
    } as Case,
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
