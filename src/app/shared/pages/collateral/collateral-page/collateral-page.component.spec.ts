import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollateralPageComponent } from './collateral-page.component';
import { TranslateModule } from '@ngx-translate/core';
import {NgxMaskModule} from "ngx-mask";
import {Product} from "../../../interfaces/product.interface";
import {Customer} from "../../../interfaces/customer.interface";
import {Case} from "../../../interfaces/case.interface";

describe('CollateralPageComponent', () => {
  let component: CollateralPageComponent;
  let fixture: ComponentFixture<CollateralPageComponent>;
  const initialState = {
    postName: {
      result: "Langhus",
      valid: true,
      postalCodeType: "-"
    },
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
    } as Case
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollateralPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), TranslateModule.forRoot(), NgxMaskModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralPageComponent);
    component = fixture.componentInstance;
    component.postName = initialState.postName;
    localStorage.setItem('case', JSON.stringify(initialState.case));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
