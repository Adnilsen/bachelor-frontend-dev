import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltinnService } from '../../../../core/altinn/altinn.service';
import { Collateral } from '../../../interfaces/collateral.interface';
import { PostCodeService } from "../../../../core/postCode/post-code.service";
import { PostCode } from "../../../interfaces/postcode.interface";

@Component({
  selector: 'app-collateral-page',
  templateUrl: './collateral-page.component.html',
  styleUrls: ['./collateral-page.component.scss'],
})
export class CollateralPageComponent implements OnInit {
  loading!: boolean;

  panelOpenState = true;

  form!: FormGroup;

  collateral!: Collateral;

  selectedType = 'HOUSING-CO-OPERATIVE';

  purhaseAmount = new FormControl('', Validators.required);

  sharedDebt = new FormControl('');

  addressControl = new FormControl('');

  postalNumberControl = new FormControl('');

  coHabitantControl = new FormControl('', Validators.required);

  requiredLoanAmountController = new FormControl('', Validators.required);

  coHabitant!: boolean;

  postName!: PostCode;

  requiredLoanAmount!: string | null;

  loanAmountHelp!: boolean;

  maxLoanAmount = 3_000_000;

  collateralTypes = [
    { type: 'HOUSING-CO-OPERATIVE', value: 'Borettslag' },
    { type: 'CONDOMINIUM', value: 'Selveier' },
  ];

  coHabitantForm!: FormGroup;

  constructor(private router: Router, private altinnService: AltinnService, private postCodeService: PostCodeService) {}

  ngOnInit() {
    this.coHabitantForm = new FormGroup({
      cohabitant: this.coHabitantControl,
    });
    this.form = new FormGroup({
      requiredLoanAmount: this.requiredLoanAmountController
    });

    this.requiredLoanAmountController.setValue(localStorage.getItem('requiredLoanAmount'));
    this.requiredLoanAmount = localStorage.getItem('requiredLoanAmount');

    this.loading = false;
    // TODO slett etter gjennomgang frontend
    this.collateral = this.altinnService.getMockAltinnData();
    this.purhaseAmount.setValue(this.collateral.realEstate.purchaseAmount);
    this.purhaseAmount.disable();
    if (this.collateral.realEstate.type === 'Borettslag') {
      this.selectedType = 'HOUSING-CO-OPERATIVE';
      this.sharedDebt.setValidators(Validators.required);
      this.sharedDebt.setValue(this.collateral.realEstate.sharedDebt);
      this.sharedDebt.disable();
    } else {
      this.selectedType = 'CONDOMINIUM';
      this.postalNumberControl.setValidators(Validators.required);
      this.postalNumberControl.setValue(this.collateral.realEstate.postalCode);

      this.addressControl.setValidators(Validators.required);
      this.addressControl.setValue(this.collateral.realEstate.address);
    }

    this.postCodeService.getPostName(this.collateral.realEstate.postalCode).subscribe((postName) => {
      this.postName = postName
    });

    /*this.altinnService.getAltinnData(1, 2).subscribe((collateral) => {
      if (collateral) {
        this.collateral = collateral;
        this.purhaseAmount.setValue(this.collateral.realEstate.purchaseAmount);
        if (collateral.realEstate.type === 'Borettslag') {
          this.selectedType = 'HOUSING-CO-OPERATIVE';
          this.sharedDebt.setValidators(Validators.required);
          this.sharedDebt.setValue(collateral.realEstate.sharedDebt);
        } else {
          this.selectedType = 'CONDOMINIUM';
          this.postalNumberControl.setValidators(Validators.required);
          this.postalNumberControl.setValue(collateral.realEstate.postalCode);

          this.addressControl.setValidators(Validators.required);
          this.addressControl.setValue(collateral.realEstate.address);
        }
      }
    });*/
  }

  inputLoanAmountChanged(value: number) {
    if (value > this.collateral.realEstate.purchaseAmount * 0.85) {
      this.loanAmountHelp = true;
      this.form.get('requiredLoanAmount')?.setValue(this.collateral.realEstate.purchaseAmount * 0.85)
    }
  }

  displayHelp() {
    this.loanAmountHelp = !this.loanAmountHelp;
  }

  previous() {
    this.router.navigate(['broker']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  isClicked: boolean = false;

  next() {
    if (this.coHabitantForm.valid && this.form.valid) {
      localStorage.setItem('requiredLoanAmount', String(this.requiredLoanAmount));
      this.router.navigate(['loan-selection']);
    }
    this.isClicked = true;
  }
}
