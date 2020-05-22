import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Fav from './components/pages/Fav';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Book from './components/books/Book';
import BookState from './context/GBooks/BookState';
import AlertState from './context/alert/AlertState';
import FavState from './context/favourites/FavState';
import './App.css';

const App = () => {

  return (
    <BookState>
      <FavState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/fav' component={Fav} />
                <Route exact path='/about' component={About} />
                <Route exact path='/book/:id' component={Book} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
      </FavState>
    </BookState>
  );
}

export default App;
