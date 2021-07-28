import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Balance } from '../models/balance'

@Injectable({
  providedIn: 'root'
})
export class BalancesService {

  API_URL = 'http://localhost:3000/api/balances';
  CLIENT_ID = '1';

  constructor (private http: HttpClient) {
    
  }
  
  getBalances() {
    return this.http.get(`${this.API_URL}/${this.CLIENT_ID}`);
  }

  getBalance(balanceId) {
    return this.http.get(`${this.API_URL}/${this.CLIENT_ID}/${balanceId}`);
  }

  getLatestBalances() {
    return this.http.get(`${this.API_URL}/${this.CLIENT_ID}/latest`);
  }

  deleteBalance(balanceId) {
    return this.http.delete(`${this.API_URL}/${balanceId}`);
  }

  saveBalance(balance: Balance) {
    return this.http.post(`${this.API_URL}`, balance);
  }

  editBalance(balanceId, newBalance:Balance) {
    return this.http.put(`${this.API_URL}/${balanceId}`, newBalance);
  }
}
