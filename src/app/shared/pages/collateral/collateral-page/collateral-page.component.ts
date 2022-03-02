import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-collateral-page',
  templateUrl: './collateral-page.component.html',
  styleUrls: ['./collateral-page.component.scss'],
})
export class CollateralPageComponent implements OnInit {
  loading!: boolean;

  panelOpenState = false;

  form!: FormGroup;

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

  coHabitantForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {


    this.form = new FormGroup({
      /*collateral: this.collateralControl,
      coOperative: this.housingCoOperative,

       */
      amount: this.purhaseAmount,
      debt: this.sharedDebt,
      address: this.addressControl,
      postalNumber: this.postalNumberControl,
    });

    this.coHabitantForm = new FormGroup({
      cohabitant: this.coHabitantControl,
    });

    console.log(this.coHabitant);
    this.loading = false;
  }

  selectedChange(selectedType: string) {

  }

  previous(){
    this.router.navigate(['broker']);
  }

  cancel(){
    this.router.navigate(['your-loan-applications']);
  }

  isClicked: boolean = false;

  next() {
    if(this.coHabitant !== undefined){
      this.router.navigate(['collateral']);
    }
    this.isClicked = true;
  }

  showError(){
    return this.isClicked && this.coHabitant == undefined;
  }
}
