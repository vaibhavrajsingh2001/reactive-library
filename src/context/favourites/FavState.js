import React, { useReducer } from "react";
import axios from "axios";
import FavContext from './favContext';
import FavReducer from './favReducer';
import {
    ADD_FAV,
    CLEAR_FAV
} from '../types';

let library_key = process.env.REACT_APP_LIBRARY_KEY;

const FavState = props => {
    const initialState = {
        favBooks: []
    };

    const [state, dispatch] = useReducer(FavReducer, initialState);

    // get favourite books
    const fetchBook = async (arr) => {
        let favBookArr = await Promise.all(arr.map(async (id) => {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${library_key}`);
            return res.data;
        }));
        console.log(favBookArr);

        dispatch({
            type: ADD_FAV,
            payload: favBookArr
        });
    };

    // remove individual favourite book
    const removeFav = (id) => {
        let modifiedFavBooks = JSON.parse(localStorage.getItem('favBooks'));
        modifiedFavBooks = modifiedFavBooks.filter((i) => i !== id);
        localStorage.setItem('favBooks', JSON.stringify(modifiedFavBooks));
        console.log('Book removed');
        
        fetchBook(modifiedFavBooks);
    };

    // remove all favourite books
    const clearAllFav = () => {
        localStorage.clear();
        dispatch({ type: CLEAR_FAV });
    };

    return <FavContext.Provider
        value = {{
            favBooks: state.favBooks,
            fetchBook,
            clearAllFav,
            removeFav
        }}
    >
        {props.children}
    </FavContext.Provider>

};

export default FavState;
