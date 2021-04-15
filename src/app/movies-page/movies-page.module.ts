import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { RouterModule } from '@angular/router';

const routes = [
    {path: '', component: MoviesPageComponent}
]

export const moviesRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    moviesRouting
  ]
})
export class MoviesPageModule { }
