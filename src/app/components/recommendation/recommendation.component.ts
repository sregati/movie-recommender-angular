import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { RecommendationsService } from 'src/app/services/recommendations.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { switchMap } from 'rxjs/operators';

export interface Card {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  movies: Movie[];
  userDetails: User;

  constructor(private recommend: RecommendationsService, private login: LoginService) { }

  ngOnInit() {
    this.login.getUserDetails().pipe(switchMap(data => this.recommend.getRecommendations(data))).subscribe(
      movies => this.movies = movies
    );

}
}
