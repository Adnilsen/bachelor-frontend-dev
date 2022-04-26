import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerPageComponent } from './shared/pages/broker-page/broker-page.component';
import { CollateralPageComponent } from './shared/pages/collateral/collateral-page/collateral-page.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';
import { LoanPageComponent } from './shared/pages/loan-page/loan-page.component';
import { ResultComponent } from "./shared/pages/result/result.component";
import {YourLoanApplicationComponent} from "./shared/pages/your-loan-application/your-loan-application.component";
import {SummaryComponent} from "./shared/pages/summary/summary.component";

const routes: Routes = [
  { path: '', component: YourLoanApplicationComponent },
  { path: 'your-loan-applications', component: YourLoanApplicationComponent},
  { path: 'landing', component: LandingPageComponent },
  { path: 'broker', component: BrokerPageComponent },
  { path: 'collateral', component: CollateralPageComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'loan', component: LoanPageComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
