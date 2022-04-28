import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Product} from "../../interfaces/product.interface";
import {Customer} from "../../interfaces/customer.interface";
import {Case} from "../../interfaces/case.interface";

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  const initialState= {
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
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    localStorage.setItem('case', JSON.stringify(initialState.case));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
