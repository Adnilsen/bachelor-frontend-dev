import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  loading!: boolean;

  panelOpenState = true;

  loanAmount!: number;

  ngOnInit(): void {
    this.loanAmount = Number(localStorage.getItem('requiredLoanAmount'));
  }



}
