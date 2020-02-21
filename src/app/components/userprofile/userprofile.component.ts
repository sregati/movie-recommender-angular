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

  /* |        1 | Comedy     |
|        2 | Action     |
|        3 | Romance    |
|        4 | Thriller   |
|        5 | Fantasy    |
+----------+------------+
*/
  Genre:any[] = [
    { id: 2, name: 'Action' },
    { id: 1, name: 'Comedy' },
    { id: 4, name: 'Thriller' },
    { id: 5, name: 'Fantasy' },
    { id: 3, name: 'Romance' }
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
          return this.http.put("/mrs/moviepreferences/user/" + this.userDetails.id, this.Genre.filter(g => g.checked)).subscribe();
      }

}
