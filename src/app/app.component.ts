import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-application';

  // TODO fjern denne når hentes backend
  case = {
    caseId: 99,
    caseName: 'Finansieringsbevis',
  };

  constructor(translate: TranslateService) {
    translate.addLangs(['no']);
    translate.setDefaultLang('no');
    translate.use('no');
  }
}
