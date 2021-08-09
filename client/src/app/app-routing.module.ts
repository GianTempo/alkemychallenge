import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';

//Components imports
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './pages/home/home.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';
import { LoginComponent } from './pages/login/login.component';

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
    path: 'balances',
    pathMatch: 'full',
    component: BalanceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
