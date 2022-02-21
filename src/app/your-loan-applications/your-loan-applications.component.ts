import { Component, OnInit } from '@angular/core';
import { CaseService } from '../core/case.service';
import { Case } from '../shared/interfaces/case.interface';

@Component({
  selector: 'app-your-loan-applications',
  templateUrl: './your-loan-applications.component.html',
  styleUrls: ['./your-loan-applications.component.scss'],
})
export class YourLoanApplicationsComponent implements OnInit {
  cases: Case[] = [];

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.caseService.getCases().subscribe((cases) => {
      this.cases = cases;
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
