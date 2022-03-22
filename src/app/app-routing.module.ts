import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrokerPageComponent } from './shared/pages/broker-page/broker-page.component';
import { CollateralPageComponent } from './shared/pages/collateral/collateral-page/collateral-page.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'your-loan-applications',
    loadChildren: () =>
      import('./your-loan-applications/your-loan-applications.module').then((m) => m.YourLoanApplicationsModule),
  },
  { path: 'landing', component: LandingPageComponent },
  { path: 'broker', component: BrokerPageComponent },
  { path: 'collateral', component: CollateralPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
