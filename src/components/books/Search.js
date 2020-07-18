import React, { useState, useContext } from 'react';
import BookContext from '../../context/GBooks/bookContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const bookContext = useContext(BookContext);
    const alertContext = useContext(AlertContext);
    const { books, clearBooks, searchBooks } = bookContext;
    const { showAlert } = alertContext;

    const [text, manageText] = useState('');

    const onChange = (e) => manageText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text){
            searchBooks(text);
        } else {
            showAlert('Enter some text to search!', 'light');
        }
        manageText('');
    }

        return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type='text' name='text' placeholder='Search books...' aria-label='Search books' value={text} onChange={onChange} />
                    <input type='submit' value='Search' aria-label='search button' className='btn btn-dark' />
                    {books.length > 0 && <button className="btn btn-danger" onClick={clearBooks}>Clear</button>}
                </form>
            </div>
        )
}

export default Search