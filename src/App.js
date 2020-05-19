import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/books/Search';
import Books from './components/books/Books';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Book from './components/books/Book';
import './App.css';

class App extends Component {

  state = {
    books: [],
    book: {},
    loading: false,
    alert: {}
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=greek&maxResults=20&key=${process.env.REACT_APP_LIBRARY_KEY}`);
    // console.log(res.data.items);
    this.setState({ books: res.data.items, loading: false });
  };

  searchBooks = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=20&key=${process.env.REACT_APP_LIBRARY_KEY}`);
    if (res) {
      this.setState({ books: res.data.items, loading: false });
    } else alert('Book not found!');
  };

  getBook = async id => {
    this.setState({ loading: true });
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_LIBRARY_KEY}`);
    this.setState({ book: res.data, loading: false });
    if(!res.data) alert('data not fetched')
  };

  clearBooks = () => this.setState({ books: [], loading: false });

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: {} }), 2500);
  };

  clearAlert = () => {
    this.setState({ alert: {} });
  };

  render() {
    const { books, book, loading, alert } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={alert} clearAlert={this.clearAlert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchBooks={this.searchBooks} clearBooks={this.clearBooks} showClearBtn={books.length > 0 ? true : false} showAlert={this.showAlert} />
                  <Books loading={loading} books={books} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/book/:id' render={props => (
                <Book { ...props } getBook={this.getBook} book={book} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;