import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book: { volumeInfo: { authors, imageLinks, previewLink, title} } }) => {

    return (
        <div className='card text-center'>
            <img src={imageLinks.smallThumbnail} alt='thumbnail' className='img' style={{ width: '100px' }} />
            <h3>{title}</h3>
            <p>Author: {authors[0]}</p>
            <div>
                <a href={previewLink} className='btn btn-dark btn-sm my-1'>More</a>
            </div>
        </div>
    )
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem