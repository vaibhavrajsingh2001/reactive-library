import React from 'react';
import BookItem from './BookItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Books = ({ loading, books }) => {

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

Books.propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const bookStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Books