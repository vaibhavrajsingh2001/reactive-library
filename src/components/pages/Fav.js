import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../books/BookItem';
import FavContext from '../../context/favourites/favContext';

const Fav = () => {
    const favContext = useContext(FavContext);
    const { fetchBook, favBooks, clearAllFav } = favContext;
    const favBooksId = JSON.parse(localStorage.getItem('favBooks'));
    console.log(favBooks);

    useEffect(() => {
        (async () => {
            if (favBooksId !== null) {
                await fetchBook(favBooksId);
            }
        })();
        // eslint-disable-next-line
    }, []);

    if (favBooks.length > 0) {
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to search</Link>
                {favBooks.length > 0 && <button className="btn btn-danger" onClick={clearAllFav}>Clear All</button>}
                <div className='grid-3'>
                    {favBooks.map(book => (
                        <BookItem key={book.etag} book={book} removeFavBtn={true} />
                    ))}
                </div>
            </Fragment>
        )
    } else return (
        <Fragment>
            <div className='all-center'>
                No books in favourite.<br /><br />Please search and add your favourite books!
                <img src='/noFav.png' alt='No fav books' style={{width:'200px'}}></img>
            </div>
        </Fragment>
    );

}

export default Fav
