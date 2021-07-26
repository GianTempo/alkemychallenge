import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components imports
import { BalanceComponent } from './components/balance/balance.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/balances',
    pathMatch: 'full'
  },
  {
    path: 'balances',
    component: BalanceComponent
  },
  {
    path: 'balances/add',
    pathMatch: 'full',
    component: LatestBalancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
