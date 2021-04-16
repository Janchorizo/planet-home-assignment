import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { MoviesService } from 'src/app/shared/movies.service'
import { Movie } from 'src/app/shared/types';

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
    }
  
    ngOnInit(): void {
      this.moviesService.fetchRatedMoviesPage(0);
      this.moviesService.fetchUnratedMoviesPage(0);
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
        }, 600);
    }

    handleMouseLeave() {
        this.focused = false;
    }
}
