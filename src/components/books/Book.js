import React, { Fragment, useEffect, useContext } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import BookContext from '../../context/GBooks/bookContext';
import Spinner from '../layout/Spinner';

const Book = () => {
    const bookContext = useContext(BookContext);
    const { book, loading, getBook, addFav } = bookContext;

    // grab the book's id from the params in URL and pass
    // it to getBook function to fetch details
    let { id } = useParams();

    useEffect(() => {
        getBook(id);
        // eslint-disable-next-line
    }, [id]);

    // destructured to extract volumeInfo & accessInfo earlier
    // so that we can check if they have been retrieved
    const { id: bookId, volumeInfo, accessInfo } = book;
    let isFav = false;
    const manageFav = (event) => {
        if (!isFav) {
            addFav(bookId);
            console.log('Added to fav!');
            event.target.style.background = '#ad1d45';
            event.target.style.color = '#e6f5ff';

        }
        isFav = !isFav;
    };

    if (loading) return <Spinner />

    if (volumeInfo && accessInfo) {
        const { title, subtitle, authors, description, industryIdentifiers, pageCount, printedPageCount, categories, averageRating, imageLinks, previewLink } = volumeInfo;
        const { pdf, epub } = accessInfo;

        return <Fragment>
            <Link to='/' className='btn btn-light' style={{position: 'relative', left: '10px'}}>Back to search</Link>
            <div className='card grid-2' style={{ fontSize: 'small', padding: '10px', border: '1px solid #ccc' }}>
                <div>
                    <h2>{title}</h2>{subtitle && <p>[{subtitle}]</p>}
                    <img src={imageLinks.smallThumbnail || imageLinks.thumbnail || imageLinks.small} alt='featured' style={{ width: '200px', border: 'solid 3px' }} />
                </div>
                <div>
                    {description && <Fragment>
                        <h3>Description:</h3>
                        <br />
                        <p dangerouslySetInnerHTML={{ __html: description }} style={descriptionStyle}></p>
                    </Fragment>}
                </div>
            </div>
            <div className='card'>
                <div className='badge badge-success'>{printedPageCount && pageCount && <p><b>Pages:</b> {printedPageCount} pages (with {pageCount} printed pages)</p>}</div>
                {typeof industryIdentifiers !== 'undefined' && <div className='badge badge-white'>ISBN_10: {industryIdentifiers[0].identifier}</div> && <div className='badge badge-white'>ISBN_13: {industryIdentifiers[1].identifier}</div>}
                {pdf.isAvailable && <a href={pdf.acsTokenLink || epub.downloadLink} className="badge badge-light">PDF</a>}
                {epub.isAvailable && <a href={epub.acsTokenLink || pdf.downloadLink} className="badge badge-light">EPUB</a>}
                {typeof authors !== 'undefined' && <ul><b>Authors:</b>
                    {authors.map((el, index) => <li key={index}>{el}</li>)}
                </ul>}
                <br />
                {averageRating && <p><b>Rating:</b> {averageRating}/5</p>}
                {typeof categories !== 'undefined' && <ul><b>Categories:</b>
                    {categories.map((el, index) => <li key={index} className='badge badge-white'>{el}</li>)}
                </ul>}
                {previewLink && <a href={previewLink} className='btn btn-primary my-1'>Preview here</a>}
                <div className='btn' onClick={manageFav}>Add to favourites</div>
            </div>
        </Fragment>
    } else return null;

}

const descriptionStyle = {
    minHeight: '150px',
    maxHeight: '300px',
    overflow: 'auto'
}

export default Book