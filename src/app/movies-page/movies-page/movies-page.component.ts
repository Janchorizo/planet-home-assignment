import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { MoviesService } from 'src/app/shared/movies.service'
import { Movie, Rating } from 'src/app/shared/types';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
    focused = false;
    transitioned = false;
    altBgColor = 'white';
    ratedMovies: {page: number, movies: Movie[]};
    unratedMovies: {page: number, movies: Movie[]};
    ratings: Map<string, Rating>;

    constructor(
      private userService: UserService,
      private moviesService: MoviesService,
      private router: Router){
        this.moviesService.getRatedMovies().subscribe(
          movies => { this.ratedMovies = movies; }
        );

        this.moviesService.getUnratedMovies().subscribe(
          movies => { this.unratedMovies = movies; }
        );

        this.moviesService.getRatings().subscribe(
          ratings => { this.ratings = ratings; }
        );
    }
  
    ngOnInit(): void {
      this.moviesService.fetchRatedMoviesPage(this.ratedMovies.page);
      this.moviesService.fetchUnratedMoviesPage(this.unratedMovies.page);
    }
  
    handleMouseEnter(){
        this.focused = true;
    }
  
    handleMouseExit(){
      this.focused = false;
    }

    handleAccountMouseEnter() {
        this.altBgColor = '#9289c8';
        this.focused = true;
    }

    handleAcountClick() {
        this.transitioned = true;
        setTimeout(() => {
          this.router.navigate(['/app/account']);
        }, 600);
    }

    handleLogoutMouseEnter() {
        this.altBgColor = 'white';
        this.focused = true;
    }

    handleLogoutClick() {
        this.transitioned = true;
        setTimeout(() => {
          this.userService.logout();
          this.router.navigate(['']);
        }, 600);
    }

    handleMouseLeave() {
        this.focused = false;
    }

    handlePrevUnratedMoviesPage() {
      if (this.unratedMovies.page > 0) {
        this.moviesService.fetchUnratedMoviesPage(this.unratedMovies.page - 1);
      }
    }

    handleNextUnratedMoviesPage() {
      if (this.unratedMovies.movies.length > 0) {
        this.moviesService.fetchUnratedMoviesPage(this.unratedMovies.page + 1);
      }
    }

    handlePrevRatedMoviesPage() {
      if (this.ratedMovies.page > 0) {
        this.moviesService.fetchRatedMoviesPage(this.ratedMovies.page - 1);
      }
    }

    handleNextRatedMoviesPage() {
      if (this.ratedMovies.movies.length > 0) {
        this.moviesService.fetchRatedMoviesPage(this.ratedMovies.page + 1);
      }
    }

    handleRateCreation(movieId: string, score: number) {
      this.moviesService.rateMovie(movieId, score);
      this.moviesService.fetchUnratedMoviesPage(this.unratedMovies.page);
      this.moviesService.fetchRatedMoviesPage(this.ratedMovies.page);
    }

    handleRateUpdate(movieId: string, score: number) {
      if (this.ratings.has(movieId) === false) {return}

      const rating = this.ratings.get(movieId);
      this.moviesService.updateRating(rating.id, score);
      this.moviesService.fetchRatedMoviesPage(this.ratedMovies.page);
    }
}
