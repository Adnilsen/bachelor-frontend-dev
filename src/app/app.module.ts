import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { YourLoanApplicationsModule } from './your-loan-applications/your-loan-applications.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrokerPageComponent } from './shared/pages/broker-page/broker-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollateralPageComponent } from './shared/pages/collateral/collateral-page/collateral-page.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, BrokerPageComponent, CollateralPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSliderModule,
    YourLoanApplicationsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatChipsModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
