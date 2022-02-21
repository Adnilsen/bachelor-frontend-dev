import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrokerPageComponent } from './shared/pages/broker-page/broker-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'your-loan-applications',
    loadChildren: () =>
      import('./your-loan-applications/your-loan-applications.module').then((m) => m.YourLoanApplicationsModule),
  },
  { path: 'broker', component: BrokerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
