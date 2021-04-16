import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { User, Movie } from './types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  user: User|null;
  ratedPageSize = 6;
  unratedPageSize = 3;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
  ) {
    this.dataService.getUser().subscribe(
      (user: User) => { this.user = user; }
    );
  }

  getRatedMovies(): BehaviorSubject<{page: number, movies: Movie[]}> {
    return this.dataService.getRatedMovies();
  }

  getUnratedMovies(): BehaviorSubject<{page: number, movies: Movie[]}> {
    return this.dataService.getUnratedMovies();
  }

  fetchRatedMoviesPage(page: number) {
    this.apiService.hit(
      'getRatedMovies',
      null,
      {page, size: this.ratedPageSize},
      null,
      this.user?.token
    ).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.changeRatedMoviesPage(page, response.body);
        }
      }
    );
  }

  fetchUnratedMoviesPage(page: number) {
    this.apiService.hit(
      'getUnratedMovies',
      null,
      {page, size: this.unratedPageSize},
      null,
      this.user?.token
    ).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.changeUnratedMoviesPage(page, response.body);
        }
      }
    );
  }
}
