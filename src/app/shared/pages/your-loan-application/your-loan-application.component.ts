import { Component, OnInit } from '@angular/core';
import {Case} from "../../interfaces/case.interface";
import {CaseService} from "../../../core/case/case.service";

@Component({
  selector: 'app-your-loan-application',
  templateUrl: './your-loan-application.component.html',
  styleUrls: ['./your-loan-application.component.scss']
})
export class YourLoanApplicationComponent implements OnInit {

  cases: Case[] = [];

  loading!: boolean;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    /*this.caseService.getCases().subscribe((cases) => {
      this.loading = false;
      this.cases = cases;
    });*/

    this.cases = this.caseService.getMockCases();
  }
}
