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

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  liked:any[]
  Genre: any[] = [
    { id: 11, name: 'Action' },
    { id: 12, name: 'Comedy' },
    { id: 13, name: 'Horror' },
    { id: 14, name: 'Animation' },
    { id: 15, name: 'Drama' },
    { id: 16, name: 'Historical' }
  ];


  constructor(private router:Router, private login:LoginService) { }

  ngOnInit() {
    this.Genre.forEach(g => g.checked = false);
  }


  register(form: NgForm){
    let newUser: User = form.value;
    console.log(this.Genre);
    this.login.registerAuth(newUser);
    this.router.navigate(['/login']);
  }

  
}
