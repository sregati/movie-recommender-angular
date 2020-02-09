import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-recommender-angular';
  constructor(private router: Router, private login: LoginService){}
 
  logout() {
    this.login.logout();
    this.router.navigate(['/login']);
}
}
