import React, { useReducer } from "react";
import axios from "axios";
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import {
    SEARCH_BOOKS,
    GET_BOOK,
    CLEAR_BOOKS,
    SET_LOADING
} from '../types';

const BookState = props => {
    const initialState = {
        books: [],
        book: {},
        loading: false
    }

    const [state, dispatch] = useReducer(bookReducer, initialState);

    // Fetch books
    const searchBooks = async (text) => {
        manageLoading();
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=20`);

        if (res) {
            // sends res.data.items to bookReducer which adds it to state
            dispatch({
                type: SEARCH_BOOKS,
                payload: res.data.items
            });
        } else alert('Book not found!');
    };

    // fetch single book volume
    const getBook = async (id) => {
        manageLoading();
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if(res){
            dispatch({
                type: GET_BOOK,
                payload: res.data
            })
        }else alert('data not fetched');
    };

    // clear books from view
    const clearBooks = () => dispatch({ type: CLEAR_BOOKS });


    // manage loading
    const manageLoading = () => dispatch({ type: SET_LOADING });

    /*
    The values being passed here can be used anywhere once
    you import bookContext and use the useContext hook
    const bookContext = useContext(BookContext);
    Now you can use bookcontext.books or bookContext.loading anywhere
    */
    return <BookContext.Provider
        value={{
            books: state.books,
            book: state.book,
            loading: state.loading,
            searchBooks,
            clearBooks,
            getBook
        }}
    >
        {props.children}
    </BookContext.Provider>
}

export default BookState;
