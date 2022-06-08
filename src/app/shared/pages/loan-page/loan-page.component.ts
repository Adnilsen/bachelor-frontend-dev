import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Collateral} from "../../interfaces/collateral.interface";
import {Case} from "../../interfaces/case.interface";
import {CaseService} from "../../../core/case/case.service";

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss'],
})
export class LoanPageComponent implements OnInit {
  form!: FormGroup;

  loading!: boolean;

  value = 0;

  collateral!: Collateral;

  case!: Case;

  minEquity!: number;

  equityToUse = 50000;

  maxValue = 2000000;

  minValue = 150000;

  sliderStep = 10000;

  loanDuration = 15;

  monthlyLoanPayment = 0;

  totalCost = 0;

  totalRealEstateValue?: number;

  documentFee?: number;

  accountPaymentController = new FormControl('', Validators.required);

  accountRepaymentController = new FormControl('', Validators.required);

  dateSelectController = new FormControl('', Validators.required);

  daysOfMonth = [];

  accountNumbers = [{accountNumber: "1333556699636", accountName: "Lønnskonto"},{accountNumber: "6778222995646", accountName: "Sparekonto"}];
  nominalInterestRate = 2;

  effectiveInterestRate = 2.09;

  informationHeaderText!: string;

  informationContentText!: string;

  loanValueValid = true;

  loanType!: string;

  loanCosts: number = 5000;

  purchaseValue!: number;

  constructor(private router: Router, private caseService: CaseService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      dateSelect: this.dateSelectController,
      repayment: this.accountRepaymentController,
    });

    // @ts-ignore
    this.collateral = JSON.parse(localStorage.getItem('collateral'));
    // @ts-ignore
    this.case = JSON.parse(localStorage.getItem('case'));

    if(this.collateral.realEstate.energyClass === "A" || this.collateral.realEstate.energyClass === "B") {
      this.loanType = "Green"
    } else{
      if(this.case.customer.age < 32){
        this.loanType = "Young";
      }
    }


    this.maxValue = this.collateral.purchaseAmount * 0.85;
    this.minEquity = this.collateral.purchaseAmount * 0.15;
    this.value = this.maxValue;
    this.purchaseValue = this.collateral.purchaseAmount;
    if (this.minEquity <= this.case.equity) {
      this.minValue = this.collateral.purchaseAmount - this.case.equity;
    } else {
      this.minValue = 200000;
    }

    if( this.collateral.realEstate.type === "Borettslag") {
      this.totalRealEstateValue = this.collateral.purchaseAmount + this.loanCosts;
    }
    else {
      this.documentFee = (this.collateral.purchaseAmount * 0.025);
      this.totalRealEstateValue = this.collateral.purchaseAmount + this.documentFee + this.loanCosts;
      this.collateral.purchaseAmount = this.collateral.purchaseAmount + this.documentFee;
      this.minEquity -= this.loanCosts
      this.minValue = this.totalRealEstateValue - this.case.equity;
    }

    this.calculateLoan();
    this.appendDaysOfMonth()
  }

  sliderValueChanged(value: any) {
    this.value = value.value;
    this.calculateLoan();
    this.loanValueValid = true;
  }

  sliderDurationChanged(duration: any) {
    this.loanDuration = duration.value;
    this.calculateLoan();
  }

  inputValueChanged(value: number) {
    if (value <= this.maxValue) {
      this.value = value;
    } else {
      this.loanValueValid = false;
      this.value = this.maxValue;
    }
    this.calculateLoan();
  }

  minValueChange(value: FocusEvent) {
    if (this.value < this.minValue) {
      this.value = this.minValue;
      this.calculateLoan();
      this.loanValueValid = false;
    }
    else {
      this.loanValueValid = true;
    }
  }

  inputDurationChanged(value: number) {
    if (value <= 30) {
      this.loanDuration = value;
    } else if (value < 1) {
      this.loanDuration = 1;
    }
    this.calculateLoan();
  }

  calculateLoan() {
    const interestRate = this.effectiveInterestRate / 100 / 12;
    this.monthlyLoanPayment = (interestRate / (1 - (1 + interestRate) ** -(12 * this.loanDuration))) * this.value;
    this.totalCost = this.monthlyLoanPayment * 12 * this.loanDuration;

    if( this.collateral.realEstate.type === "Borettslag") {
      this.equityToUse = this.collateral.purchaseAmount - this.value;
    } else {
      this.equityToUse = this.collateral.purchaseAmount - this.value + 5000;
    }

  }

  appendDaysOfMonth() {
    for(let i = 1; i < 31; i++) {
      // @ts-ignore
      this.daysOfMonth.push(i);
    }
  }

  previous() {
    this.router.navigate(['loan-selection']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  isClicked: boolean = false;

  next() {
    if (this.form.valid) {
      this.case.loanAmount = this.value;
      this.case.downpaymentPeriod = this.loanDuration;
      this.case.equity = this.equityToUse;
      this.case.purchaseAmount = this.collateral.purchaseAmount;
      this.caseService.updateCase(this.case, this.loanType).subscribe((resp: string) => {
        localStorage.setItem('case', JSON.stringify(resp));
        this.router.navigate(['result'])
      }, error => console.log(error));
    }
    this.isClicked = true;
  }
}
