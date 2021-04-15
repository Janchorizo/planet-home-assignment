import { ReduxAction } from "./types";
import {
    SET_USER,
    CLEAR_USER
} from './userActions';


const initialState = null;

function hasParam (action: ReduxAction, key: string): boolean {
    return Object.hasOwnProperty.call(action.payload, key);
}

export function userReducer(prevState=initialState, action: ReduxAction) {
    let newState = prevState;

    switch(action.type) {
        case SET_USER:
            if (hasParam(action, 'user')) {
                newState = action.payload.user;
            }
            break;
        case CLEAR_USER:
            newState = initialState;
            break;
    }

    return newState
}
