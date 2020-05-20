import React, { useContext } from 'react';
import BookItem from './BookItem';
import Spinner from '../layout/Spinner';
import BookContext from '../../context/GBooks/bookContext';

const Books = () => {
    const bookContext = useContext(BookContext);
    const { loading, books } = bookContext;

        if(loading) {
            return <Spinner />
        }

        return (
            <div style={bookStyle}>
                {books.map(book => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        )

}

const bookStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Books