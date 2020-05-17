import React from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Books from './components/books/Books';
import './App.css';

class App extends React.Component {

  state = {
    books: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=greek&maxResults=20&key=${process.env.REACT_APP_LIBRARY_KEY}`);
    console.log(res.data.items);
    this.setState({ books: res.data.items, loading: false});
  }

  render() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Books loading={this.state.loading} books={this.state.books} />
      </div>
    </div>
  );
  }
}

export default App;