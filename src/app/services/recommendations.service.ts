import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user';
import { Movie } from '../movie';
import { Genre } from '../genre';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getRecommendations(user: User) {
    let ids = user.genres.map(g => g.id);
    
    return this.http.get<Movie[]>('/mrs/recommender/recommendations?prefs='+ids.join(','));
  }
}
