import {
    SEARCH_BOOKS,
    GET_BOOK,
    CLEAR_BOOKS,
    SET_LOADING
} from '../types';


// action.apyload contains the data passed when dispatch was called
export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case GET_BOOK:
            return {
                ...state,
                book: action.payload,
                loading: false
            };
        case CLEAR_BOOKS:
            return {
                ...state,
                books: [],
                loading: false
            };
        default:
            return state;
    }
}