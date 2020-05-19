import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookItem = ({ book: { id, volumeInfo: { authors, imageLinks, previewLink, title } } }) =>

    <div className='card text-center'>
        <img src={imageLinks ? imageLinks.smallThumbnail : '/unavailable-image.jpg'} alt='thumbnail' className='img' style={{ width: '100px', height: '150px' }} />
        <h3>{title}</h3>
        <p>Author: {typeof authors !== 'undefined' ? authors[0] : 'Not available'}</p>
        <div >
            <Link to={`/book/${id}`} className='btn btn-dark btn-sm my-1'>
                More
            </Link>
        </div>
    </div>


BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem