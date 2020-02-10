import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('/mrs/movies');
  }
  getMovieById(id: number) {
    return this.http.get('/mrs/movies/'+id);
  }
  updateMovie(movie: Movie) {
    return this.http.put('/mrs/movies', movie);
  }
  removeMovieById(id: number) {
    return this.http.delete('/mrs/movies/'+id);
  }
  
}
