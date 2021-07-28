import { Component, OnInit } from '@angular/core';

//services
import { BalancesService } from '../../services/balances.service'

@Component({
  selector: 'app-latest-balances',
  templateUrl: './latest-balances.component.html',
  styleUrls: ['./latest-balances.component.css']
})
export class LatestBalancesComponent implements OnInit {

  constructor(private bSvc:BalancesService) { }

  latestBalances:any = [];

  ngOnInit(): void {
    this.bSvc.getLatestBalances().subscribe(
      res => this.latestBalances = res,
      err => console.log(err)
    );
  }


}
