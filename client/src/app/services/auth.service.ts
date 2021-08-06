import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL: string = 'http://localhost:3000/api/auth';

  constructor (private http: HttpClient) {
  }
  
  login(username:string, password:string, remember:boolean) {
    return this.http.post(`${this.AUTH_URL}/login`, { username, password })
  }

  signin(username:string, password:string) {
    return this.http.post(`${this.AUTH_URL}/signin`, {username, password})
  }

  isUserLoggedIn(): boolean {
    let token = localStorage.getItem('token')
    if (token) {
      return true
    }
    else return false
  }
}
