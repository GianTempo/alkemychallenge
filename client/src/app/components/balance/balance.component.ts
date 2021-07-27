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
    
  }

  
}
