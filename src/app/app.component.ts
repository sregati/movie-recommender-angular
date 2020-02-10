import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-recommender-angular';
  token$: Observable<any>;
  constructor(private router: Router, private login: LoginService){}
  ngOnInit() {
    this.token$ = this.login.currentTokenSubject;
  }
 
  logout() {
    this.login.logout();
    this.router.navigate(['/login']);
}
}
