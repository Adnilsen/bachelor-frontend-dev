import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourLoanApplicationsRoutingModule } from './your-loan-applications-routing.module';
import { YourLoanApplicationsComponent } from './your-loan-applications.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from '../shared/components/expansion-panel/expansion-panel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule,
  ],
  exports: [YourLoanApplicationsComponent],
})
export class YourLoanApplicationsModule {}
