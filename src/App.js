import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/books/Search';
import Books from './components/books/Books';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Book from './components/books/Book';
import './App.css';

const App = () => {

  const [books, manageBooks] = useState([]);
  const [book, manageBook] = useState({});
  const [loading, manageLoading] = useState(false);
  const [alert, manageAlert] = useState({});

  useEffect(() => {
    async function fetchData() {
       manageLoading(true);
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=greek&maxResults=20&key=${process.env.REACT_APP_LIBRARY_KEY}`);
    // console.log(res.data.items);
    manageBooks(res.data.items);
    manageLoading(false);
    }
   fetchData();
  }, []);

   const searchBooks = async (text) => {
    manageLoading(true);
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=20&key=${process.env.REACT_APP_LIBRARY_KEY}`);
    if (res) {
      manageBooks(res.data.items);
      manageLoading(false);
    } else alert('Book not found!');
  };

  const getBook = async id => {
    manageLoading(true);
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_LIBRARY_KEY}`);
    manageBook(res.data);
    manageLoading(false);
    if(!res.data) alert('data not fetched')
  };

  const clearBooks = () => {
    manageBooks([]);
    manageLoading(false);
  };

  const showAlert = (msg, type) => {
    manageAlert({ msg, type });
    setTimeout(() => manageAlert({}), 2500);
  };

  const clearAlert = () => {
    manageAlert({});
  };


    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Alert alert={alert} clearAlert={clearAlert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchBooks={searchBooks} clearBooks={clearBooks} showClearBtn={books.length > 0 ? true : false} showAlert={showAlert} />
                  <Books loading={loading} books={books} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/book/:id' render={props => (
                <Book { ...props } getBook={getBook} book={book} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;