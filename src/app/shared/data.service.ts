import { Injectable, Inject } from '@angular/core';
import { Store } from 'redux'
import { BehaviorSubject } from 'rxjs';
import { UserActions } from 'src/redux/userActions';
import { MoviesActions } from 'src/redux/moviesActions';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  appStore: Store;
  userSubject: BehaviorSubject<object>;
  ratedMoviesSubject: BehaviorSubject<object>;
  unratedMoviesSubject: BehaviorSubject<object>;
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

    this.unsubscribeStore = this.appStore.subscribe(
      this.handleStoreUpdate.bind(this));
  }

  private handleStoreUpdate() {
    const newState = this.appStore.getState();
    this.userSubject.next(newState.user);
    this.ratedMoviesSubject.next({
      page: newState.movies.ratedPage,
      movies: newState.movies.ratedPage
    });
    this.unratedMoviesSubject.next({
      page: newState.movies.unratedPage,
      movies: newState.movies.unratedPage
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

  getRatedMovies(): BehaviorSubject<object> {
    return this.ratedMoviesSubject;
  }

  getUnratedMovies(): BehaviorSubject<object> {
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
}
