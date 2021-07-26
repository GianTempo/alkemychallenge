import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';
import { NavComponent } from './components/nav/nav.component';

//Services
import { BalancesService } from './services/balances.service';
import { AddBalanceComponent } from './components/add-balance/add-balance.component'

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    LatestBalancesComponent,
    NavComponent,
    AddBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BalancesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
