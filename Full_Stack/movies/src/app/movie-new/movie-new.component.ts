import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie, Review } from './../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
  newMovie: Movie = new Movie();
  newReview: Review = new Review();
  movies: Array<Movie>;

  constructor(
    private _movieService: MovieService,
    private _router: Router) {
    this._movieService.moviesAvailable.subscribe((movies) => {
      this.movies = movies;
    });
    }

  ngOnInit() {
    // this.newMovie = new Movie();
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);
    this.newMovie.reviews.push(this.newReview);
    // this.movies.push(this.newMovie);
    this._movieService.updateMovies(this.newMovie);
    this.newMovie = new Movie();
    this._router.navigate(['/movies']);
  }
}
