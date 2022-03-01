import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-area',
  templateUrl: './information-area.component.html',
  styleUrls: ['./information-area.component.scss'],
})
export class InformationAreaComponent  {
  @Input() headerText?: string;

  @Input() mainText!: string;

  @Input() style?: string;

  constructor() {}


}
