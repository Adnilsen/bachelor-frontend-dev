import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourLoanApplicationsRoutingModule } from './your-loan-applications-routing.module';
import { YourLoanApplicationsComponent } from './your-loan-applications.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [YourLoanApplicationsComponent],
  imports: [CommonModule, YourLoanApplicationsRoutingModule, MatSliderModule],
})
export class YourLoanApplicationsModule {}
