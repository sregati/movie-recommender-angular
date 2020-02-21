import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../user';
import { Genre } from '../../genre'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  Genre:any[] = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Romance' },
    { id: 4, name: 'Thriller' },
    { id: 5, name: 'Fantasy' }
  ];


  constructor(private router:Router, private login:LoginService) { }

  ngOnInit() {
    this.Genre.forEach(g => g.checked = false);
  }


  register(form: NgForm){
    let newUser: User = form.value;
    newUser.genres = this.Genre.filter(g => g.checked);
    this.login.registerAuth(newUser).subscribe();
    this.router.navigate(['/login']);
  }

  
}
