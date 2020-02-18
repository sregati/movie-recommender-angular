import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/movie';

export interface Card {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  allMovies: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {

    this.movieService.getMovies
    ().subscribe((data: Movie[])=>{
      this.allMovies = data}
    );
  }

}
