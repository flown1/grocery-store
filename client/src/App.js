import React, { Component } from 'react';
import './Styles/App.css';

import ListOfProducts from './Components/Main/ProductsContainer/ListOfProducts'
import Navbar from './Components/Navbar/Navbar'
import FeaturedSlider from './Components/Main/Slider/Slider'
import './Styles/utils/Utils.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FeaturedSlider />
          <hr className="horizontal-separator"/>
        <div className="flex-wrapper list-of-products-wrapper">
          <ListOfProducts/>
        </div>
      </div>
    );
  }
}

export default App;