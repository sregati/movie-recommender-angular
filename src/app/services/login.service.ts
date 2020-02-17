import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl = "/";
  currentTokenSubject : BehaviorSubject<string>;
  users: any[] = [
    {
      "id": 60362,
      "lastName": "Howard",
      "firstName": "Murray",
      "email": "murrayhoward@bedlam.com"
    },
    {
      "id": 20249,
      "lastName": "Osborne",
      "firstName": "Sheppard",
      "email": "sheppardosborne@bedlam.com"
    },
    {
      "id": 48558,
      "lastName": "Benson",
      "firstName": "Osborn",
      "email": "osbornbenson@bedlam.com"
    },
    {
      "id": 21841,
      "lastName": "Houston",
      "firstName": "Rosie",
      "email": "rosiehouston@bedlam.com"
    },
    {
      "id": 48045,
      "lastName": "Mays",
      "firstName": "Imogene",
      "email": "imogenemays@bedlam.com"
    }
  ]

  constructor(private http: HttpClient) { this.currentTokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));}

  loginAuth(email, password) {
    return of("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kXSdJhhUKTJemgs8O0rfIJmUaxoSIDdClL_OPmaC7Eo").pipe(
        tap(m => {
          localStorage.setItem('token', m.toString());
          this.currentTokenSubject.next(localStorage.getItem('token'));
        }));
    // return this.http.post('/mrs/loginAuth', { email: email, password: password }).pipe(
    //   tap(m => {
    //     localStorage.setItem('token', m.toString());
    //     this.currentTokenSubject.next(localStorage.getItem('token'));
    //   })
    // );
  }


registerAuth(newUser: User) {
    //return this.http.post("/user", newUser);
    console.log(newUser);
}


  
  logout() {
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
  }

}
