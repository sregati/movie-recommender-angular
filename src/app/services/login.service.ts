import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl = "/";
  currentTokenSubject : BehaviorSubject<string>;

  constructor(private http: HttpClient) { this.currentTokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));}

  loginAuth(email, password) {
    return this.http.post('/api/loginAuth', { email: email, password: password }).pipe(
      tap(m => {
        localStorage.setItem('token', m.toString());
        this.currentTokenSubject.next(localStorage.getItem('token'));
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
  }

}
