import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  user: User|null;
  pageSize = 6;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
  ) {
    this.dataService.getUser().subscribe(
      (user: User) => { this.user = user; }
    );
  }

  getRatedMovies() {
    return this.dataService.getRatedMovies();
  }

  getUnratedMovies() {
    return this.dataService.getUnratedMovies();
  }

  fetchRatedMoviesPage(page: number) {
    this.apiService.hit(
      'getRatedMovies',
      null,
      {page, size: this.pageSize},
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
      {page, size: this.pageSize},
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
