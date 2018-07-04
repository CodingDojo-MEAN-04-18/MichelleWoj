import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/new', component: MovieNewComponent },
  { path: 'movies/:id', component: MovieViewComponent },
  { path: 'movies/:id/review', component: MovieReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
