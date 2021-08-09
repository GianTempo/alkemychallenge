import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL: string = 'http://localhost:3000/api/auth';
  response: any
  constructor (private http: HttpClient) {
  }
  
  login(username: string, password: string) {
    console.log('loggin in ')
    let log = this.http.post(`${this.AUTH_URL}/login`, { username, password })
    log.subscribe(res => {
      this.response = res
      localStorage.setItem('token', this.response.token)
      this.setId(this.response.user)
    });
    return log
  }

  signin(username: string, password: string) {
    console.log('signin in ')
    let register = this.http.post(`${this.AUTH_URL}/signup`, { username, password })
    register.subscribe(res => {
      this.response = res
      localStorage.setItem('token', this.response.token)
      this.setId(this.response.user)
    });
    return register
  }

  isUserLoggedIn(): boolean {
    let token = localStorage.getItem('token')
    if (token) {
      return true
    }
    else return false
  }

  setId(id:number):void {
    environment.clientId = id
  }
}
