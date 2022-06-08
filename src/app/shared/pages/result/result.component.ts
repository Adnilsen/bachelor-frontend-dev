import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Case} from "../../interfaces/case.interface";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  loading!: boolean;

  panelOpenState = true;

  case!: Case;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // @ts-ignore
    this.case = JSON.parse(localStorage.getItem('case'));
  }


  next() {
    this.router.navigate(['your-loan-applications'])
  }
}
