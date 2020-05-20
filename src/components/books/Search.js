import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchBooks,clearBooks, showClearBtn, showAlert}) => {

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
                    <input type='text' name='text' placeholder='Search books...' value={text} onChange={onChange} />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {showClearBtn && <button className="btn btn-light btn-block" onClick={clearBooks}>Clear</button>}
            </div>
        )
}

Search.propTypes = {
    searchBooks: PropTypes.func.isRequired,
    clearBooks: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
}

export default Search