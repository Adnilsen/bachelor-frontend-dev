import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CaseService} from "../../../core/case/case.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  loading!: boolean;

  caseId!: number;

  constructor(private router: Router, private caseService: CaseService) {}

  ngOnInit(): void {
  // @ts-ignore
    this.caseId = JSON.parse(localStorage.getItem('case')).caseId;
  }

  next() {
    this.caseService.startHousingLoan(this.caseId).subscribe((response: string) => {
      console.log(response)
    });
    this.router.navigate(['broker']);
  }
}
