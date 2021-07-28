import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance';
import { BalancesService } from 'src/app/services/balances.service';

@Component({
  selector: 'app-balances-list',
  templateUrl: './balances-list.component.html',
  styleUrls: ['./balances-list.component.css']
})
export class BalancesListComponent implements OnInit {

  constructor(private bSvc:BalancesService) { }

  ngOnInit(): void {
    this.getBalances()
  }

  /**String that identifies if the current operation is an add or an edit operation*/
  currentOperation: string = 'add';

  /**Array that contains all of the user's incomes*/
  incomes: any = [];

  /**Array that contains all of the user's spendings*/
  spendings: any = [];

  /**Array that contains both user's incomes and spendings as delivered by the service*/
  transactions: any = [];

  /**Placeholder transaction that stores the data of a new or existing transaction depending
   * on the action that the user is making
  */
  transaction: Balance = {
    id: 0,
    clientId: 1,
    concept: '',
    amount: 0,
    createdAt: new Date(),
    transactionType: ''
  }

  /**@function getBalances
   * Get all transactions from backend
   */
  getBalances(): void {
    this.bSvc.getBalances().subscribe(
      (res) => {
        this.transactions = res;
        this.setIncomes();
        this.setSpendings()
      },
      err => console.log(err)
    )
  }

  /**@function setIncomes
   * Filters incomes from the transactions array and stores it in incomes array*/
  setIncomes(): void {
    this.incomes = this.transactions.filter(transaction => transaction.transactionType == 'Income');
   }

  /**@function setSpendings
   * Filters spendings from the transactions array and stores it in spendings array*/
  setSpendings(): void {
    this.spendings = this.transactions.filter(transaction => transaction.transactionType == 'Spending');
  }
  
  /**@function saveTransaction
  * Send the current Transaction object to the database and 
  * calls getBalances to update the data of the user
  */
  saveTransaction(): void {
    if (this.currentOperation == 'add') {
      this.bSvc.saveBalance(this.transaction)
        .subscribe(
          err => console.log(err),
          res => {
            this.getBalances()
          }
        )
    }
    else if (this.currentOperation == 'edit') {
      this.bSvc.editBalance(this.transaction.id, this.transaction).subscribe(
        res => {
          this.getBalances()
        },
        err => console.log(err)
      )
    }
     
    this.resetTransaction()
   }
  
  /**@function setTransaction
   * @param {Balance} transaction
   * Recieves a transaction and sets current transaction object with it's data
  */
  setTransaction(transaction: Balance): void {
    this.transaction = transaction;
    this.currentOperation = 'edit';
  }

  /**@function deleteTransaction
   * @param {number} transactionId
   * Recieves a transaction id to delete from database.
  */
  deleteTransaction(transactionId: number) {
    this.bSvc.deleteBalance(transactionId).subscribe(
      res => {
        this.getBalances()
      },
      err => console.log(err)
    )
  }

  /**@function resetTransaction
   * Resets transaction object if user doesn't want to execute an action in add transaction form.
  */
  resetTransaction(): void {
    this.transaction = {
      clientId: 1,
      concept: '',
      amount: 0,
      createdAt: new Date(),
      transactionType: ''
    }

    if (this.currentOperation == 'edit') { //If user is editing an existing transaction, change current transaction to add
      this.currentOperation = 'add';
    }
  }
}
