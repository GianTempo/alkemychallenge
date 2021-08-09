import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private authSvc: AuthService,
    private router: Router) { }
  
    ngOnInit(): void {
    }
  
    isLoginValid: boolean = true; //Parameter to validate if login is successful or not.
    user = {
      username: '',
      password: '',
    }
  
    submit(): void {
      this.authSvc.login(this.user.username, this.user.password).subscribe((res) => {
          let response:any = res
          if (response.message == 'success!') {
            this.resetUser();
            this.router.navigate([''])
          }
          else {
            this.isLoginValid = false;
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
