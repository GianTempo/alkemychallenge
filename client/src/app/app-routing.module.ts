import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBalanceComponent } from './components/add-balance/add-balance.component';

//Components imports
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './pages/home/home.component';
import { LatestBalancesComponent } from './components/latest-balances/latest-balances.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { MainComponent } from './pages/main/main.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'balances',
        component: BalanceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
