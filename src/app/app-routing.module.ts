import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'your-loan-applications', loadChildren: () => import('./your-loan-applications/your-loan-applications.module').then(m => m.YourLoanApplicationsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
