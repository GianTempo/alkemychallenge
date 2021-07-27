import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';

//Components imports
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './components/home/home.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'balances/add',
    pathMatch: 'full',
    component: AddBalanceComponent
  },
  {
    path: 'balances',
    pathMatch: 'full',
    component: BalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
