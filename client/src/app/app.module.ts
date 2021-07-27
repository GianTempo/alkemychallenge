import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';
import { NavComponent } from './components/nav/nav.component';

//Services
import { BalancesService } from './services/balances.service';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    LatestBalancesComponent,
    NavComponent,
    AddBalanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BalancesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
