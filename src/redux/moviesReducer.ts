import { ReduxAction } from "./types";
import {
  SET_UNRATED_PAGE,
  SET_UNRATED,
  SET_RATED_PAGE,
  SET_RATED
} from './moviesActions';


const initialState: object = {
  ratedMovies: [],
  ratedPage: 0,
  unreatedMovies: [],
  unratedPage: 0
};

function hasParam (action: ReduxAction, key: string): boolean {
  return Object.hasOwnProperty.call(action.payload, key);
}

export function markBreaksReducer(prevState=initialState, action: ReduxAction) {
  let newState = prevState;
  
  switch(action.type) {
    case SET_RATED_PAGE:
      if (hasParam(action, 'page') && action.payload.page >= 0) {
        newState = {...prevState, ratedPage: action.payload.page};
      }
      break;
    case SET_RATED:
      if (hasParam(action, 'movies')) {
        newState = {...prevState, ratedMovies: action.payload.movies};
      }
      break;
    case SET_UNRATED_PAGE:
      if (hasParam(action, 'page') && action.payload.page >= 0) {
        newState = {...prevState, unratedPage: action.payload.page};
      }
      break;
    case SET_UNRATED:
      if (hasParam(action, 'movies')) {
        newState = {...prevState, unratedMovies: action.payload.movies};
      }
      break;
  }
  
  return newState
}
