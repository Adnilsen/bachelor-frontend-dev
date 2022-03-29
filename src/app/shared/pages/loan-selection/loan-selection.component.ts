import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-selection',
  templateUrl: './loan-selection.component.html',
  styleUrls: ['./loan-selection.component.scss'],
})
export class LoanSelectionComponent {
  loading!: boolean;

  panelOpenState = true;

  constructor(private router: Router) {}

  previous() {
    this.router.navigate(['collateral']);
  }

  cancel() {
    this.router.navigate(['your-loan-applications']);
  }

  next() {
    console.log('Neste');
  }
}
