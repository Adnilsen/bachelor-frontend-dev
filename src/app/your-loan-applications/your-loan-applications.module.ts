import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourLoanApplicationsRoutingModule } from './your-loan-applications-routing.module';
import { YourLoanApplicationsComponent } from './your-loan-applications.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from '../shared/expansion-panel/expansion-panel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [YourLoanApplicationsComponent, ExpansionPanelComponent],
  imports: [
    CommonModule,
    YourLoanApplicationsRoutingModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
  ],
  exports: [],
})
export class YourLoanApplicationsModule {}
