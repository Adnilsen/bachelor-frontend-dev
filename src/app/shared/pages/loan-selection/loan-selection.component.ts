import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {Collateral} from "../../interfaces/collateral.interface";
import {AltinnService} from "../../../core/altinn/altinn.service";

@Component({
  selector: 'app-loan-selection',
  templateUrl: './loan-selection.component.html',
  styleUrls: ['./loan-selection.component.scss'],
})
export class LoanSelectionComponent implements OnInit{

  collateral! : Collateral

  loading!: boolean;

  panelOpenState = true;

  constructor(private router: Router, private altinnService: AltinnService) {}

  ngOnInit(): void {
    this.collateral = this.altinnService.getMockAltinnData();
  }




  previous() {
    this.router.navigate(['collateral']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  next() {
    this.router.navigateByUrl('loan', { state: { requiredLoanAmount: history.state.requiredLoanAmount}})
  }


}
