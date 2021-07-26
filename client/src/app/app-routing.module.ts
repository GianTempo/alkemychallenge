import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components imports
import { BalanceComponent } from './components/balance/balance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/balances',
    pathMatch: 'full'
  },
  {
    path: 'balances',
    component: BalanceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
