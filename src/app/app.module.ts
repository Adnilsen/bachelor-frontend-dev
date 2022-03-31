import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrokerPageComponent } from './shared/pages/broker-page/broker-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollateralPageComponent } from './shared/pages/collateral/collateral-page/collateral-page.component';
import { InformationAreaComponent } from './shared/components/information-area/information-area.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';
import { LoanPageComponent } from './shared/pages/loan-page/loan-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoanSelectionComponent } from './shared/pages/loan-selection/loan-selection.component';
import { ResultComponent } from './shared/pages/result/result.component';
import { YourLoanApplicationComponent } from './shared/pages/your-loan-application/your-loan-application.component';
import {ExpansionPanelComponent} from "./shared/components/expansion-panel/expansion-panel.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// @ts-ignore
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    ToolbarComponent,
    BrokerPageComponent,
    CollateralPageComponent,
    InformationAreaComponent,
    LandingPageComponent,
    LoanSelectionComponent,
    LoanPageComponent,
    ResultComponent,
    YourLoanApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSliderModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatChipsModule,
    MatInputModule,
    NgxSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    NgxMaskModule.forRoot(),
    MatRadioModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
