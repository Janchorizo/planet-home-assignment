import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie/movie.component';

const routes = [
    {path: '', component: MoviesPageComponent}
]

export const moviesRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MoviesPageComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    moviesRouting
  ]
})
export class MoviesPageModule { }
