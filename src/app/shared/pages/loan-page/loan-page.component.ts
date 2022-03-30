import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.scss'],
})
export class LoanPageComponent implements OnInit {
  form!: FormGroup;

  loading!: boolean;

  value = 2000000;

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

  daysOfMonth = [1, 2, 3, 4, 5, 6, 7];

  accountNumbers = [1333556699636, 6778222995646];

  nominalInterestRate = 2;

  effectiveInterestRate = 2.09;

  informationHeaderText!: string;

  informationContentText!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      dateSelect: this.dateSelectController,
      payment: this.accountPaymentController,
      repayment: this.accountRepaymentController,
    });

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

  inputEquityValueChanged(value: number) {
    this.equityToUse = value;
    this.calculateLoan();
  }

  inputDurationChanged(value: number) {
    if (value <= 30) {
      this.loanDuration = value;
    } else {
      this.loanDuration = 30;
    }
    this.calculateLoan();
  }

  calculateLoan() {
    const interestRate = this.effectiveInterestRate / 100 / 12;
    this.monthlyLoanPayment = (interestRate / (1 - (1 + interestRate) ** -(12 * this.loanDuration))) * this.value;
    this.totalCost = this.monthlyLoanPayment * 12 * this.loanDuration;
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
      console.log('yes');
    }
    this.isClicked = true;
  }
}
