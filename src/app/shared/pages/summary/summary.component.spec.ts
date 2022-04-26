import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {NgxMaskModule} from "ngx-mask";
import {Collateral, RealEstate} from "../../interfaces/collateral.interface";
import {Product} from "../../interfaces/product.interface";
import {Customer} from "../../interfaces/customer.interface";
import {Case} from "../../interfaces/case.interface";

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  const initialState = {
    collateral: {
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
    } as Collateral,
    case: {
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
    } as Case,
    broker: {
      name: 'Nordvik',
      brokerId: 1,
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports: [RouterTestingModule.withRoutes([]), TranslateModule.forRoot(), NgxMaskModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    localStorage.setItem('collateral', JSON.stringify(initialState.collateral));
    localStorage.setItem('case', JSON.stringify(initialState.case));
    localStorage.setItem('broker', JSON.stringify(initialState.broker));
    component.collateral = initialState.collateral.realEstate;
    console.log(component.collateral)
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component.collateral)
    expect(component).toBeTruthy();
  });
});
