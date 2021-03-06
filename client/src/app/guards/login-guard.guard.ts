import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  constructor (private authSvc: AuthService,
    private router: Router) {
    
  }
  
  currentRoute: string;

  canActivate() {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
    else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
  
}
