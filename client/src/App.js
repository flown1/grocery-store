import React, { Component } from 'react';
import './Styles/App.css';

import ListOfProducts from './Components/Main/ProductsContainer/ListOfProducts'
import Navbar from './Components/Navbar/Navbar'
import FeaturedSlider from './Components/Main/Slider/Slider'
import './Styles/utils/Utils.css'
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FeaturedSlider />
        <div className="horizontal-separator"></div>
        <div className="flex-wrapper list-of-products-wrapper">
          <ListOfProducts/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;