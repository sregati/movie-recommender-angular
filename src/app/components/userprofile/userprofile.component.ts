import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetails = [];
  Genre = [
    { id: 11, name: 'Action' },
    { id: 12, name: 'Comedy' },
    { id: 13, name: 'Horror' },
    { id: 14, name: 'Animation' },
    { id: 15, name: 'Drama' },
    { id: 16, name: 'Historical' }
  ];

  constructor(private router:Router, private login:LoginService) { }

  ngOnInit() {
    this.login.getUserDetails
    ().subscribe((data: any[])=>{
      console.log(data);
      this.userDetails = data;
    })  
      }

}
