import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavContext from '../../context/favourites/favContext';

const BookItem = ({ book: { id, volumeInfo: { authors, imageLinks, previewLink, title } }, removeFavBtn }) =>{
    const favContext = useContext(FavContext);

    const { removeFav } = favContext;

    const removeBook = () => {
        removeFav(id);
    }

    return(
    <div className='card text-center'>
        <img src={imageLinks ? imageLinks.smallThumbnail : '/unavailable-image.jpg'} alt='thumbnail' className='img' style={{ width: '100px', height: '150px' }} />
        <h3>{title}</h3>
        <p>Author: {typeof authors !== 'undefined' ? authors[0] : 'Not available'}</p>
        <div >
            <Link to={`/book/${id}`} className='btn btn-dark btn-sm my-1'>
                More
            </Link>
            {removeFavBtn && <button className='btn btn-danger btn-sm my-1' onClick={removeBook}>Remove from fav</button>}
        </div>
    </div>);

}

BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem