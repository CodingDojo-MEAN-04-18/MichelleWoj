import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie, Review } from './../movie';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  newReview: Review = new Review();
  movie: Movie;

  constructor(private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.params.id;
    this._movieService.currentMovie.subscribe((movie) => {
      this.movie = movie;
    });
    this._movieService.showMovie(id);
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ra new review', form.value);
    const id = this._route.snapshot.params.id;
    this.movie.reviews.push(this.newReview);
    this._movieService.addReview(this.movie, id);
    this._router.navigate(['/movies']);

  }
}
