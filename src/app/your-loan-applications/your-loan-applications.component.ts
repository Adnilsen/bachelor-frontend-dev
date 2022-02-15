import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-loan-applications',
  templateUrl: './your-loan-applications.component.html',
  styleUrls: ['./your-loan-applications.component.scss'],
})
export class YourLoanApplicationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('yes');
  }
}
