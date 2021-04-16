import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { moviesReducer } from './moviesReducer';

export const appReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer
});
