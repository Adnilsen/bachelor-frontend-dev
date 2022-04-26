import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltinnService } from '../../../../core/altinn/altinn.service';
import { Collateral } from '../../../interfaces/collateral.interface';
//import { PostCodeService } from "../../../../core/postCode/post-code.service";
import { PostCode } from "../../../interfaces/postcode.interface";
import {Case} from "../../../interfaces/case.interface";
import {PostCodeService} from "../../../../core/postCode/post-code.service";

@Component({
  selector: 'app-collateral-page',
  templateUrl: './collateral-page.component.html',
  styleUrls: ['./collateral-page.component.scss'],
})
export class CollateralPageComponent implements OnInit {
  loading!: boolean;

  panelOpenState = true;

  form!: FormGroup;

  case!: Case;

  collateral!: Collateral;

  selectedType = 'HOUSING-CO-OPERATIVE';

  requiredInsuranceSelect = new FormControl('', Validators.required);

  postName!: PostCode;

  confirmed!: boolean;

  insuranceCompanies = [{name: "if"}, {name: "Gjensidige"}]

  isClicked: boolean = false;

  constructor(private router: Router, private altinnService: AltinnService, private postCodeService: PostCodeService) {}

  ngOnInit() {
    this.form = new FormGroup({
      requiredInsuranceData: this.requiredInsuranceSelect
    });

    // @ts-ignore
    this.case = JSON.parse(localStorage.getItem('case'))

    this.loading = false;
    // TODO slett etter gjennomgang frontend
    this.collateral = this.altinnService.getMockAltinnData(this.case.customer.id);
    if (this.collateral.realEstate.type === 'Borettslag') {
      this.selectedType = 'HOUSING-CO-OPERATIVE';
    } else {
      this.selectedType = 'CONDOMINIUM';
    }

    this.postCodeService.getPostName(this.collateral.realEstate.postalCode).subscribe((postName) => {
      this.postName = postName;
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

  previous() {
    this.router.navigate(['broker']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }


  next() {
    if(this.form.valid) {
      localStorage.setItem('collateral', JSON.stringify(this.collateral.realEstate));
      this.router.navigate(['summary']);
    }
    this.isClicked = true;
  }
}
