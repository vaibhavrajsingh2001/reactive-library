import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

export class Book extends Component {

    componentDidMount() {
        // grab the book's id from the params in URL and pass
        // it to getBook function to fetch details
        this.props.getBook(this.props.match.params.id);
    }

    static propTypes = {
        loading: PropTypes.bool,
        book: PropTypes.object.isRequired,
        getBook: PropTypes.func.isRequired
    }

    render() {
        const { volumeInfo } = this.props.book;
        const { loading } = this.props;

        if (loading) return <Spinner />

        if (volumeInfo) {
            const { title, authors, description, industryIdentifiers, pageCount, printedPageCount, categories, averageRating, imageLinks } = volumeInfo;

            return <Fragment>
                <Link to='/' className='btn btn-light' style={{ width: 'auto', fontSize: 'small', padding: '3px' }}>Back to search</Link>
                <div className="card grid-2" style={{ fontSize: 'small' }}>
                    <div>
                        <img src={imageLinks.small || imageLinks.thumbnail} alt="featured" style={{ width: '200px', border: 'solid 3px' }} />
                        <h2>{title}</h2>
                        <p><b>Authors:</b> {authors}</p>
                        <p><b>Pages:</b> {pageCount} pages (with {printedPageCount} printed pages)</p>
                        <p><b>Rating:</b> {averageRating}</p>
                        {typeof categories !== 'undefined' && <ul><b>Categories:</b>
                            {categories.map(el => <li>{el}</li>)}
                        </ul>}
                    </div>
                    <p><b>Description:</b><br /><p dangerouslySetInnerHTML={{ __html: description }}></p></p>
                    <table>
                        <thead><b>ISBN codes:</b></thead>
                        <tbody>
                            {industryIdentifiers.map(el => <tr><td><b>{el.type}:</b></td><td>{el.identifier}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        } else return null;

    }
}

export default Book