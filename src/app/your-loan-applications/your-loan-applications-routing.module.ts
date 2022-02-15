import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourLoanApplicationsComponent } from './your-loan-applications.component';

const routes: Routes = [{ path: '', component: YourLoanApplicationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourLoanApplicationsRoutingModule { }
