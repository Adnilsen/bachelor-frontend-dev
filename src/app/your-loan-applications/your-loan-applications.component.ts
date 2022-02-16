import { Component, OnInit } from '@angular/core';
import {CaseService} from "../core/case.service";

@Component({
  selector: 'app-your-loan-applications',
  templateUrl: './your-loan-applications.component.html',
  styleUrls: ['./your-loan-applications.component.scss'],
})
export class YourLoanApplicationsComponent implements OnInit {
  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    console.log('yes');
    console.log(this.caseService.getCases());
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
