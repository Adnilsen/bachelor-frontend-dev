import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collateral-page',
  templateUrl: './collateral-page.component.html',
  styleUrls: ['./collateral-page.component.scss'],
})
export class CollateralPageComponent implements OnInit {
  loading!: boolean;

  panelOpenState = false;

  form!: FormGroup;

  /*collateralControl = new FormControl('', Validators.required);

  housingCoOperative = new FormControl('', Validators.required);

   */

  selectedType = 'HOUSING-CO-OPERATIVE';

  purhaseAmount = new FormControl('', Validators.required);

  sharedDebt = new FormControl('', Validators.required);

  addressControl = new FormControl('', Validators.required);

  postalNumberControl = new FormControl('', Validators.required);

  coHabitantControl = new FormControl('', Validators.required);

  coHabitant!: boolean;

  collateralTypes = [
    { type: 'HOUSING-CO-OPERATIVE', value: 'Borettslag' },
    { type: 'SELVEIER', value: 'Selveier' },
  ];

  constructor() {}

  ngOnInit(): void {


    this.form = new FormGroup({
      /*collateral: this.collateralControl,
      coOperative: this.housingCoOperative,

       */
      amount: this.purhaseAmount,
      debt: this.sharedDebt,
      address: this.addressControl,
      postalNumber: this.postalNumberControl,
      cohabitant: this.coHabitantControl,
    });

    this.loading = false;
  }

  selectedChange(selectedType: string) {

  }
}
