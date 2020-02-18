import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/genre';
import { User } from 'src/app/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetails: User;
  Genre:any[] = [
    { id: 11, name: 'Action' },
    { id: 12, name: 'Comedy' },
    { id: 13, name: 'Horror' },
    { id: 14, name: 'Animation' },
    { id: 15, name: 'Drama' },
    { id: 16, name: 'Historical' }
  ];

  constructor(private router:Router, private login:LoginService, private http: HttpClient) { }

  ngOnInit() {

    this.login.getUserDetails
    ().subscribe((data: User)=>{
      console.log(data);
      this.userDetails = data;
      this.Genre.forEach(g => {
        g.checked = data.genres.some(g1 => g1.id == g.id);
      });
      console.log(this.Genre);
    })  
      }

      updateGenre(){
          return this.http.put("/mrs/moviepreferences/" + this.userDetails.id, this.userDetails.genres).subscribe();
      }

}
