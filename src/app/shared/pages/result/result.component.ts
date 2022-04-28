import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent{

  loading!: boolean;

  panelOpenState = true;

  constructor(private router: Router) {}


  next() {
    this.router.navigate(['your-loan-applications'])
  }
}
