import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ExpansionPanelComponent } from './shared/expansion-panel/expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from "@angular/common/http";
import {MatSliderModule} from "@angular/material/slider";
import {YourLoanApplicationsModule} from "./your-loan-applications/your-loan-applications.module";



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    MatSliderModule,
    YourLoanApplicationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
