import { ReduxAction, createActionGenerator } from './types';


// Action types
export const SET_UNRATED_PAGE = 'SET_UNRATED_PAGE';
export const SET_UNRATED = 'SET_UNRATED';
export const SET_RATED_PAGE = 'SET_RATED_PAGE';
export const SET_RATED = 'SET_RATED';

// Action generators
export const setRatedPage: (payload: any, error: boolean)=>ReduxAction =
  createActionGenerator(SET_RATED_PAGE);

export const setRatedMovies: (payload: any, error: boolean)=>ReduxAction =
  createActionGenerator(SET_RATED);

export const setUnratedPage: (payload: any, error: boolean)=>ReduxAction =
  createActionGenerator(SET_UNRATED_PAGE);

export const setUnratedMovies: (payload: any, error: boolean)=>ReduxAction =
  createActionGenerator(SET_UNRATED);

// For bootstrapping purposes
export class MoviesActions {
  setRatedPage: (payload: any, error?: boolean)=>ReduxAction = setRatedPage;
  setRatedMovies: (payload: any, error?: boolean)=>ReduxAction = setRatedMovies;
  setUnratedPage: (payload: any, error?: boolean)=>ReduxAction = setUnratedPage;
  setUnratedMovies: (payload: any, error?: boolean)=>ReduxAction = setUnratedMovies;
}
