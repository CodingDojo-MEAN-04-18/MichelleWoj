import { Component, OnInit } from '@angular/core';
import { Movie, Review } from './../movie';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
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
  onDelete() {
    console.log('deleting movie');
    const id = this._route.snapshot.params.id;
    this._movieService.deleteMovie(id);

    this._router.navigate(['/movies']);
  }

}
