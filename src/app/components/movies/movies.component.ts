import { Component, OnInit } from '@angular/core';

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

  cards: Card[] = [
    {title:'Annabelle Comes Home', subtitle:'Horror', image:'/assets/images/annabelle.jpg',description:'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', cols: 1, rows: 1},
    {title:'Annabelle Comes Home', subtitle:'Horror', image:'/assets/images/annabelle.jpg',description:'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', cols: 1, rows: 1},
    {title:'Annabelle Comes Home', subtitle:'Horror', image:'/assets/images/annabelle.jpg',description:'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', cols: 1, rows: 1},
    {title:'Annabelle Comes Home', subtitle:'Horror', image:'/assets/images/annabelle.jpg',description:'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', cols: 1, rows: 1},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
