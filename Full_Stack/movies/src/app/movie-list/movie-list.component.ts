import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.moviesAvailable.subscribe((movies) => {
      this.movies = movies;
    });
  }

  averageRating(reviews) {
    let total = 0;
    let number = 0;
    let average = 0;
    const x = reviews.length;
    for (let i = 0; i < reviews.length; i++) {
      total = total + reviews[i].stars;
    }
    number = total / x;
    average = Math.round(number * 10) / 10;
    return average;
  }
}
