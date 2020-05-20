import {
    SHOW_ALERT,
    CLEAR_ALERT
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return action.payload;
        case CLEAR_ALERT:
            return null;
        default:
            return state;
    }
}