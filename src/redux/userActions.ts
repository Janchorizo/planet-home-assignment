import { ReduxAction, createActionGenerator } from './types';


// Action types
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

// Action generators
export const setUser: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(SET_USER);

export const clear: (payload: any, error: boolean)=>ReduxAction =
    createActionGenerator(CLEAR_USER);

export class UserActions {
    setUser: (payload: any, error: boolean)=>ReduxAction = setUser;
    clear: (payload: any, error: boolean)=>ReduxAction = clear;
}
