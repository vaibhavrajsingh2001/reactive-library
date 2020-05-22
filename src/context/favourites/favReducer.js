import {
    ADD_FAV,
    CLEAR_FAV
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                favBooks: action.payload
            };
        case CLEAR_FAV:
            return {
                ...state,
                favBooks: []
            };
        default:
            return state;
    }
}