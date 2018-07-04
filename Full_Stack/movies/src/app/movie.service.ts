import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesAvailable = new BehaviorSubject([]);
  currentMovie = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {
    this.getMovies();
  }


  getMovies() {
    this._http.get('http://localhost:8000/api/movies').subscribe(
      (movie: any[]) => { this.moviesAvailable.next(movie); }
    );
  }

  showMovie(id) {
    this.currentMovie.next(null);
    this._http.get('http://localhost:8000/api/movies/' + id).subscribe(
      (movie: Movie) => { this.currentMovie.next(movie); }
    );
  }

  updateMovies(newMovie: Movie) {
    this._http.post('http://localhost:8000/api/movies', newMovie).subscribe((response) => {
      this.getMovies();  }
    );
  }
  addReview(movie: Movie, id) {
    this._http.put('http://localhost:8000/api/movies/' + id, movie).subscribe(
      (response) => { this.getMovies(); }
    );
  }
  deleteMovie(id) {
    this._http.delete('http://localhost:8000/api/movies/' + id).subscribe(
      (movie: Movie) => { this.getMovies(); }
    );
  }
}
