import { Injectable, Inject } from '@angular/core';
import { Store } from 'redux'
import { BehaviorSubject } from 'rxjs';
import { UserActions } from 'src/redux/userActions';
import { MoviesActions } from 'src/redux/moviesActions';
import { Movie, Rating } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  appStore: Store;
  userSubject: BehaviorSubject<object>;
  ratedMoviesSubject: BehaviorSubject<{page: number, movies: Movie[]}>;
  unratedMoviesSubject: BehaviorSubject<{page: number, movies: Movie[]}>;
  ratingsSubject: BehaviorSubject<Map<string, Rating[]>>;
  unsubscribeStore: CallableFunction;

  constructor(
      @Inject('AppStore') appStore: Store,
      private userActions: UserActions,
      private moviesActions: MoviesActions
  ) {
    this.appStore = appStore;
    const initialState = this.appStore.getState();
    this.userSubject = new BehaviorSubject(initialState.user);
    this.ratedMoviesSubject = new BehaviorSubject({
      page: initialState.movies.ratedPage,
      movies: initialState.movies.ratedPage
    });
    this.unratedMoviesSubject = new BehaviorSubject({
      page: initialState.movies.unratedPage,
      movies: initialState.movies.unratedPage
    });
    this.ratingsSubject = new BehaviorSubject(initialState.ratings);

    this.unsubscribeStore = this.appStore.subscribe(
      this.handleStoreUpdate.bind(this));
  }

  private handleStoreUpdate() {
    const newState = this.appStore.getState();
    this.userSubject.next(newState.user);
    this.ratedMoviesSubject.next({
      page: newState.movies.ratedPage,
      movies: newState.movies.ratedMovies
    });
    this.unratedMoviesSubject.next({
      page: newState.movies.unratedPage,
      movies: newState.movies.unratedMovies
    });
  }

  // User

  getUser(): BehaviorSubject<object> {
    return this.userSubject;
  }

  setUser(user) {
    const payload = {user};
    this.appStore.dispatch(this.userActions.setUser(payload));
  }

  clearUser() {
    this.appStore.dispatch(this.userActions.clearUser({}));
  }

  // Movies

  getRatedMovies(): BehaviorSubject<{page: number, movies: Movie[]}> {
    return this.ratedMoviesSubject;
  }

  getUnratedMovies(): BehaviorSubject<{page: number, movies: Movie[]}> {
    return this.unratedMoviesSubject;
  }

  changeRatedMoviesPage(page, movies) {
    this.appStore.dispatch(this.moviesActions.setRatedMovies({movies}));
    this.appStore.dispatch(this.moviesActions.setRatedPage({page}));
  }

  changeUnratedMoviesPage(page, movies) {
    this.appStore.dispatch(this.moviesActions.setUnratedMovies({movies}));
    this.appStore.dispatch(this.moviesActions.setUnratedPage({page}));
  }

  // Ratings

  getRatings(): BehaviorSubject<Map<string, Rating[]>> {
    return this.ratingsSubject;
  }

  setRatings(ratings: Map<string, Rating[]>) {
    this.appStore.dispatch(this.moviesActions.setRatings({ratings}));
  }
}
