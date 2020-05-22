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
            <div className='grid-3'>
                {books.map(book => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        )

}

export default Books