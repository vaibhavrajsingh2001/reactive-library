import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchBooks: PropTypes.func.isRequired,
        clearBooks: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired,
    }

    onChange = (e) => this.setState({ text: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text){
            this.props.searchBooks(this.state.text);
        } else {
            this.props.showAlert('Enter some text to search!', 'light');
        }
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='Search books...' value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {this.props.showClearBtn && <button className="btn btn-light btn-block" onClick={this.props.clearBooks}>Clear</button>}
            </div>
        )
    }
}

export default Search