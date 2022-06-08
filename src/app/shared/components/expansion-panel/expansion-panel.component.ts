import { Component, Input } from '@angular/core';
import { Case } from '../../interfaces/case.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  // @ts-ignore
  @Input() cases: Case[];

  panelOpenState = true;

  constructor(private router: Router) {}

  mapImageSource(status: string) {
    switch (status) {
      case 'CASE_CREATED':
        return 'assets/images/products/exclamation-mark.svg';
      case 'WAITING_CO_APPLICANT_CONSENT':
        return 'assets/images/products/exclamation-mark.svg';
      case 'WAITING_APPLICANT_CONTINUE':
        return 'assets/images/success.svg';
      case 'ECONOMY_UPDATE':
        return 'assets/images/success.svg';
      case 'LOAN_AMOUNT_UPDATE':
        return 'assets/images/success.svg';
      case 'FINISHED':
        return 'assets/images/success.svg';
      case 'FAILED':
        return 'assets/images/success.svg';
      case 'WAITING_SIGNATURES':
        return 'assets/images/success.svg';
      case 'WAITING_DISBURSE':
        return 'assets/images/success.svg';
      case 'BANK_REFUSAL':
        return 'assets/images/error.svg';
      case 'CUSTOMER_REJECT':
      case 'CO_APPLICANT_REJECT':
        return 'assets/images/error.svg';
      case 'IN_PROGRESS':
        return '';
      case 'POTENTIAL_CUSTOMER':
        return 'assets/images/products/exclamation-mark.svg';
      case 'DOCUMENT_FOR_DOWNLOAD':
        return 'assets/images/success.svg';
      default:
        return undefined;
    }
  }

  next(curCase: Case) {
    localStorage.setItem('case', JSON.stringify(curCase));
    if(curCase.status === 'Fortsett søknad') {
      this.router.navigate(['broker']);

    } else {
      this.router.navigate(['landing']);
    }


  }
}
