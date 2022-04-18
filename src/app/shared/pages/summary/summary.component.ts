import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RealEstate} from "../../interfaces/collateral.interface";
import {Broker} from "../../interfaces/broker.interface";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  loading!: boolean;

  form!: FormGroup;

  requiredConfirmController = new FormControl('', Validators.required);

  collateral!: RealEstate;

  broker!: Broker;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      confirmedContractData: this.requiredConfirmController
    });

    // @ts-ignore
    this.collateral = JSON.parse(localStorage.getItem('collateral'));

    // @ts-ignore
    this.broker = JSON.parse(localStorage.getItem('broker'));
  }

  isClicked: boolean = false;

  previous() {
    this.router.navigate(['collateral']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  next() {
    if (this.requiredConfirmController.value === true) {
      this.router.navigate(['loan']);
    }
    this.isClicked = true;
  }
}
