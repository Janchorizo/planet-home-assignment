import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    moviesRouting
  ]
})
export class MoviesPageModule { }
