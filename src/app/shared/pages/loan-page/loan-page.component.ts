import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Collateral} from "../../interfaces/collateral.interface";
import {AltinnService} from "../../../core/altinn/altinn.service";

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss'],
})
export class LoanPageComponent implements OnInit {
  form!: FormGroup;

  loading!: boolean;

  collateral!: Collateral;

  value = 0;

  realEstateValue = 3000000;

  equityToUse = 50000;

  maxValue = 2000000;

  minValue = 150000;

  sliderStep = 10000;

  loanDuration = 15;

  monthlyLoanPayment = 0;

  totalCost = 0;

  accountPaymentController = new FormControl('', Validators.required);

  accountRepaymentController = new FormControl('', Validators.required);

  dateSelectController = new FormControl('', Validators.required);

  daysOfMonth = [3, 6, 10, 15, 23, 26, 30];

  accountNumbers = [{accountNumber: "1333556699636", accountName: "Lønnskonto"},{accountNumber: "6778222995646", accountName: "Sparekonto"}];

  nominalInterestRate = 2;

  effectiveInterestRate = 2.09;

  informationHeaderText!: string;

  informationContentText!: string;

  constructor(private router: Router, private altinnService: AltinnService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      dateSelect: this.dateSelectController,
      payment: this.accountPaymentController,
      repayment: this.accountRepaymentController,
    });

    this.collateral = this.altinnService.getMockAltinnData();

    this.maxValue = Number(localStorage.getItem('requiredLoanAmount'));
    this.value = this.maxValue;
    this.calculateLoan();
  }

  sliderValueChanged(value: any) {
    this.value = value.value;
    this.calculateLoan();
  }

  sliderDurationChanged(duration: any) {
    this.loanDuration = duration.value;
    this.calculateLoan();
  }

  inputValueChanged(value: number) {
    if (value <= this.maxValue) {
      this.value = value;
    } else {
      this.value = this.maxValue;
    }
    this.calculateLoan();
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

    this.equityToUse = this.realEstateValue - this.value;
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
      this.router.navigate(['result']);    }
    this.isClicked = true;
  }
}
