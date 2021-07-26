import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BalancesService } from '../../services/balances.service'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private bSvc:BalancesService) { }

  ngOnInit(): void {
    this.getBalances();
  }

  totalBalance: number = 0;
  balances: any = [];
  
  calculateBalance(): void {
    let total: number = 0;
    if (this.balances.length > 0) {
      for (let i = 0; i < this.balances.length; i++) {
        if (this.balances[i].transactionType == 'output') {
          total -= this.balances[i].amount;
        }
        else {
          total += this.balances[i].amount;
        }
      }
    }
    this.totalBalance = total;
  }

  getBalances() {
    this.bSvc.getBalances().subscribe(
      (res) => {
        this.balances = res
        this.calculateBalance()
      },
      err => console.log(err)
    );
  }
}
