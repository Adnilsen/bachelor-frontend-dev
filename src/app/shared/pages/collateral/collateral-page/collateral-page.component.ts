import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltinnService } from '../../../../core/altinn/altinn.service';
import { Collateral } from '../../../interfaces/collateral.interface';

@Component({
  selector: 'app-collateral-page',
  templateUrl: './collateral-page.component.html',
  styleUrls: ['./collateral-page.component.scss'],
})
export class CollateralPageComponent implements OnInit {
  loading!: boolean;

  panelOpenState = false;

  form!: FormGroup;

  collateral!: Collateral;

  selectedType = 'HOUSING-CO-OPERATIVE';

  purhaseAmount = new FormControl('', Validators.required);

  sharedDebt = new FormControl('');

  addressControl = new FormControl('');

  postalNumberControl = new FormControl('');

  coHabitantControl = new FormControl('', Validators.required);

  coHabitant!: boolean;

  collateralTypes = [
    { type: 'HOUSING-CO-OPERATIVE', value: 'Borettslag' },
    { type: 'CONDOMINIUM', value: 'Selveier' },
  ];

  coHabitantForm!: FormGroup;

  constructor(private router: Router, private altinnService: AltinnService) {}

  ngOnInit() {
    this.coHabitantForm = new FormGroup({
      cohabitant: this.coHabitantControl,
    });
    this.form = new FormGroup({
      amount: this.purhaseAmount,
      debt: this.sharedDebt,
      address: this.addressControl,
      postalNumber: this.postalNumberControl,
    });

    this.loading = false;

    this.altinnService.getAltinnData(1, 2).subscribe((collateral) => {
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
    });
  }

  previous() {
    this.router.navigate(['broker']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  isClicked: boolean = false;

  next() {
    if (this.coHabitantForm.valid) {
      this.router.navigate(['collateral']);
    }
    this.isClicked = true;
  }
}
