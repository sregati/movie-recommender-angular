import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Movie } from '../movie';
import { Genre } from '../genre';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getRecommendations(user: User) {
    return this.http.get('/mrs/recommender/'+user.id+'/recommendations');
  }
}
