import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance';
import { BalancesService } from 'src/app/services/balances.service';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent implements OnInit {

  constructor(private bSvc:BalancesService) { }

  ngOnInit(): void {
  }

  balance: Balance = {
    clientId: 1,
    concept: '',
    amount: 0,
    createdAt: new Date(),
    transactionType: ''
  }

  saveTransaction(): void {
    this.bSvc.saveBalance(this.balance)
      .subscribe(
        err => console.log(err),
        res => console.log(res)
    )
  }

}
