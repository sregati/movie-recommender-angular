import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../user';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email: string;
  password: string;
  loginSub : Subscription;

  constructor(private login:LoginService, private router:Router, private  dialog:  MatDialog) { }

  ngOnInit() {
  }

  logIn() {
    this.loginSub = this.login.loginAuth(this.email, this.password)
    .subscribe(
      (data) => { this.dialog.open(DialogComponent,{ data: {
                    message:  "Successfully logged in!!!" }});
                 this.router.navigate([this.login.redirectUrl]);
                 }
      // (error)=> { this.dialog.open(DialogComponent,{ data: {
      //             message:  "Enter valid credentials!!!" }});
      );
  }
  // ngOnDestroy(): void {
  //   this.loginSub.unsubscribe();
  // }
}
