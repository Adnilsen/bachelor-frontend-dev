import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPageComponent } from './loan-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxMaskModule} from "ngx-mask";
import {Collateral, RealEstate} from "../../interfaces/collateral.interface";
import {Product} from "../../interfaces/product.interface";
import {Customer} from "../../interfaces/customer.interface";
import {Case} from "../../interfaces/case.interface";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoanPageComponent', () => {
  let component: LoanPageComponent;
  let fixture: ComponentFixture<LoanPageComponent>;
  const initialState = {
    collateral: {
      id: 1,
      brokerId: 22,
      socialSecurityNr: 22099734456,
      purchaseAmount: 3_000_000,
      purchaseDate: new Date(),
      realEstate: {
        id: 1,
        address: "Solli gata 2",
        type: "Borettslag",
        cooperativeName: "Turten Borettslag",
        unitNumber: 23,
        sharedDebt: 120_000,
        postalCode: "0165",
        leaseNumber: 44,
        sectionNumber: 3455,
        titleNumber: 4555,
        cadastralNumber: 5666
      } as RealEstate
    } as Collateral,
    case: {
      caseId: 133,
      status: "Klar til å fortsette",
      purchaseAmount: 2_500_000,
      loanAmount: 2_500_000,
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
      debt: 200000,
      equity: 500000,
      income: 2000000
    } as Case,
    broker: {
      name: 'Nordvik',
      brokerId: 1,
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([]), NgxMaskModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPageComponent);
    // @ts-ignore
    localStorage.setItem('collateral', JSON.stringify(initialState.collateral));
    localStorage.setItem('case', JSON.stringify(initialState.case));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
