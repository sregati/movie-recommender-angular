import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginSub : Subscription;

  constructor(private login:LoginService, private router:Router) { }

  ngOnInit() {
  }

  logIn() {
    this.loginSub = this.login.loginAuth(this.email, this.password).subscribe((data) => {
      this.router.navigate([this.login.redirectUrl]);
    });
  }
  // ngOnDestroy(): void {
  //   this.loginSub.unsubscribe();
  // }
}
