import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authSvc: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  isSigninValid: boolean = true; //Parameter to validate if login is successful or not.
    user = {
      username: '',
      password: '',
    }
  
    signin(): void {
      this.authSvc.signin(this.user.username, this.user.password).subscribe((res) => {
          let response:any = res
          if (response.token) {
            this.resetUser();
            this.router.navigate([''])
          }
          else {
            this.isSigninValid = false;
            this.resetUser()
          }
        });
    }
  
    resetUser(): void {
      this.user = {
        username: '',
        password: '',
      }
    }


}
