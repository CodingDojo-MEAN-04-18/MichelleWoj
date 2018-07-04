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
}
