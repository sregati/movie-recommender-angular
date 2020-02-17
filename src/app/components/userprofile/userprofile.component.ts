import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../user';
import { Genre } from '../../genre'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  liked: Genre[];
  Genre = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Animation' },
    { id: 5, name: 'Drama' },
    { id: 6, name: 'Historical' }
  ];

  constructor(private router:Router, private login:LoginService) { }

  ngOnInit() {
  }

}
