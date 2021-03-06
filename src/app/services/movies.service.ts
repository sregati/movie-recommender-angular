import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>('/mrs/movies-ws/movies/');
  }
  getMovieById(id: number) {
    return this.http.get('/mrs/movies-ws/movie'+id);
  }
  updateMovie(movie: Movie) {
    return this.http.put('/mrs/movies-ws/movie', movie);
  }
  removeMovieById(id: number) {
    return this.http.delete('/mrs/movies-ws/movie'+id);
  }
  
}
