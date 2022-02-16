import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-application';

  case: {} = {
    "caseId": 99,
    "caseName": "Finansieringsbevis"
  };
}
