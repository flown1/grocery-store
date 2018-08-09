import React, { Component } from 'react';
import './Styles/App.css';

import ListOfProducts from './Components/ListOfProducts'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="flex-wrapper list-of-products-wrapper">
          <ListOfProducts/>
        </div>
      </div>
    );
  }
}

export default App;